// Função para obter parâmetros da URL
function getURLParams() {
    const params = new URLSearchParams(window.location.search);
    return {
        service: params.get('service') || 'Serviço não especificado',
        barber: params.get('barber') || 'Barbeiro não especificado',
        date: params.get('date') || 'Data não especificada',
        time: params.get('time') || 'Horário não especificado',
        duration: params.get('duration') || '30 min',
        price: params.get('price') || 'R$ 0,00'
    };
}

// Função para formatar a data
function formatDate(dateString) {
    try {
        if (!dateString || dateString === 'Data não especificada') {
            return 'Data não especificada';
        }
        
        // Se a data vier em formato ISO (YYYY-MM-DD)
        if (dateString.includes('-')) {
            const [year, month, day] = dateString.split('-');
            const date = new Date(year, month - 1, day);
            return date.toLocaleDateString('pt-BR', {
                weekday: 'long',
                year: 'numeric',
                month: 'long',
                day: 'numeric'
            });
        }
        
        return dateString;
    } catch (error) {
        console.error('Erro ao formatar data:', error);
        return dateString;
    }
}

// Função para formatar o horário
function formatTime(timeString) {
    try {
        if (!timeString || timeString === 'Horário não especificado') {
            return 'Horário não especificado';
        }
        
        // Se o horário vier em formato HH:MM
        if (timeString.includes(':')) {
            return timeString;
        }
        
        return timeString;
    } catch (error) {
        console.error('Erro ao formatar horário:', error);
        return timeString;
    }
}

// Função para extrair o preço numérico
function extractPrice(priceString) {
    try {
        const match = priceString.match(/R\$\s*(\d+(?:,\d{2})?)/);
        return match ? parseFloat(match[1].replace(',', '.')) : 0;
    } catch (error) {
        console.error('Erro ao extrair preço:', error);
        return 0;
    }
}

// Função para confirmar o agendamento
async function confirmBooking() {
    const confirmBtn = document.getElementById('confirm-btn');
    const loadingSpinner = confirmBtn.querySelector('.loading-spinner');
    const btnText = confirmBtn.querySelector('.btn-text');
    const confirmationMessage = document.getElementById('confirmation-message');
    
    try {
        // Mostrar loading
        loadingSpinner.style.display = 'block';
        btnText.textContent = 'Confirmando...';
        confirmBtn.disabled = true;
        
        // Simular chamada para API (substitua pela sua implementação)
        const bookingData = getURLParams();
        
        // Aqui você faria a chamada real para sua API
        const response = await fetch('/api/confirm-booking', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(bookingData)
        });
        
        // Simular delay para demonstração
        await new Promise(resolve => setTimeout(resolve, 2000));
        
        if (response.ok) {
            // Sucesso
            confirmationMessage.style.display = 'block';
            confirmationMessage.innerHTML = `
                <strong>🎉 Agendamento Confirmado!</strong><br>
                Você receberá uma confirmação por email em breve.
            `;
            
            btnText.textContent = 'Agendamento Confirmado';
            confirmBtn.style.background = '#28a745';
            
            // Redirecionar após alguns segundos
            setTimeout(() => {
                window.location.href = '/';
            }, 3000);
            
        } else {
            throw new Error('Erro ao confirmar agendamento');
        }
        
    } catch (error) {
        console.error('Erro na confirmação:', error);
        
        // Mostrar erro
        confirmationMessage.style.display = 'block';
        confirmationMessage.style.background = '#f8d7da';
        confirmationMessage.style.color = '#721c24';
        confirmationMessage.style.borderColor = '#f5c6cb';
        confirmationMessage.innerHTML = `
            <strong>❌ Erro na Confirmação</strong><br>
            Tente novamente ou entre em contato conosco.
        `;
        
        // Restaurar botão
        btnText.textContent = 'Tentar Novamente';
        confirmBtn.disabled = false;
        
    } finally {
        loadingSpinner.style.display = 'none';
    }
}

// Função para voltar e editar
function editBooking() {
    const params = getURLParams();
    
    // Construir URL de volta com os parâmetros
    const backUrl = `/booking?service=${encodeURIComponent(params.service)}&barber=${encodeURIComponent(params.barber)}`;
    
    window.location.href = backUrl;
}

// Função para preencher os dados na página
function populateBookingDetails() {
    const params = getURLParams();
    
    // Preencher os elementos
    document.getElementById('selected-date').textContent = formatDate(params.date);
    document.getElementById('selected-time').textContent = formatTime(params.time);
    document.getElementById('selected-barber').textContent = params.barber;
    document.getElementById('selected-service').textContent = params.service;
    document.getElementById('service-duration').textContent = params.duration;
    document.getElementById('service-price').textContent = params.price;
    document.getElementById('total-price').textContent = params.price;
    
    // Se não há dados, mostrar mensagem de erro
    if (params.service === 'Serviço não especificado' && 
        params.barber === 'Barbeiro não especificado') {
        
        document.querySelector('.booking-details').innerHTML = `
            <div style="text-align: center; padding: 40px;">
                <h3 style="color: #dc3545; margin-bottom: 15px;">⚠️ Dados do Agendamento Não Encontrados</h3>
                <p style="color: #6c757d; margin-bottom: 25px;">
                    Parece que você acessou esta página diretamente. 
                    Para fazer um agendamento, por favor siga o processo completo.
                </p>
                <a href="/pricing" class="btn-confirm" style="display: inline-flex;">
                    Fazer Novo Agendamento
                </a>
            </div>
        `;
        
        // Esconder botões de ação
        document.querySelector('.action-buttons').style.display = 'none';
        document.querySelector('.total-section').style.display = 'none';
    }
}

// Inicializar a página quando carregada
document.addEventListener('DOMContentLoaded', function() {
    populateBookingDetails();
    
    // Event listeners para os botões
    const confirmBtn = document.getElementById('confirm-btn');
    const editBtn = document.getElementById('edit-btn');
    
    if (confirmBtn) {
        confirmBtn.addEventListener('click', confirmBooking);
    }
    
    if (editBtn) {
        editBtn.addEventListener('click', editBooking);
    }
});

// Função utilitária para mostrar notificação
function showNotification(message, type = 'info') {
    // Criar elemento de notificação
    const notification = document.createElement('div');
    notification.className = `notification notification-${type}`;
    notification.innerHTML = message;
    
    // Adicionar estilos
    notification.style.cssText = `
        position: fixed;
        top: 20px;
        right: 20px;
        padding: 15px 20px;
        border-radius: 8px;
        color: white;
        font-weight: 500;
        z-index: 1000;
        animation: slideInRight 0.3s ease;
    `;
    
    // Definir cor baseada no tipo
    switch (type) {
        case 'success':
            notification.style.background = '#28a745';
            break;
        case 'error':
            notification.style.background = '#dc3545';
            break;
        case 'warning':
            notification.style.background = '#ffc107';
            notification.style.color = '#212529';
            break;
        default:
            notification.style.background = '#17a2b8';
    }
    
    // Adicionar ao DOM
    document.body.appendChild(notification);
    
    // Remover após 5 segundos
    setTimeout(() => {
        notification.style.animation = 'slideOutRight 0.3s ease';
        setTimeout(() => {
            if (notification.parentNode) {
                notification.parentNode.removeChild(notification);
            }
        }, 300);
    }, 5000);
}