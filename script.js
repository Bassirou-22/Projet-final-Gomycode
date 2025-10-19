    <script>
        document.addEventListener('DOMContentLoaded', function() {
            const suggestBtn = document.getElementById('suggestBtn');
            const suggestionsContainer = document.getElementById('suggestionsContainer');
            const suggestionsGrid = document.getElementById('suggestionsGrid');
            
            // Liste de suggestions de vidéos YouTube (ID de vidéos)
            const videoSuggestions = [
                {
                    id: 'dQw4w9WgXcQ',
                    title: 'Musique relaxante - Sons de la nature',
                    channel: 'Nature Sounds'
                },
                {
                    id: '9bZkp7q19f0',
                    title: 'Tutoriel CSS Avancé - Animations',
                    channel: 'Web Dev Master'
                },
                {
                    id: 'kJQP7kiw5Fk',
                    title: 'Apprendre le JavaScript en 1 heure',
                    channel: 'Code Academy'
                },
                {
                    id: 'L_jWHffIx5E',
                    title: 'Mix de musique électronique 2023',
                    channel: 'Electro Vibes'
                },
                {
                    id: 'fJ9rUzIMcZQ',
                    title: 'Queen - Bohemian Rhapsody',
                    channel: 'Queen Official'
                },
                {
                    id: 'JGwWNGJdvx8',
                    title: 'Tutoriel de guitare pour débutants',
                    channel: 'Guitar Lessons'
                }
            ];
            
            // Fonction pour afficher les suggestions
            function showSuggestions() {
                // Vider la grille
                suggestionsGrid.innerHTML = '';
                
                // Ajouter chaque vidéo à la grille
                videoSuggestions.forEach(video => {
                    const videoCard = document.createElement('div');
                    videoCard.className = 'video-card';
                    
                    // Créer le lien vers YouTube
                    const youtubeLink = `https://www.youtube.com/watch?v=${video.id}`;
                    
                    // Créer la miniature (utilisant l'API de miniatures YouTube)
                    const thumbnailUrl = `https://img.youtube.com/vi/${video.id}/hqdefault.jpg`;
                    
                    videoCard.innerHTML = `
                        <a href="${youtubeLink}" target="_blank">
                            <img src="${thumbnailUrl}" alt="${video.title}" class="thumbnail">
                            <div class="video-info">
                                <h3 class="video-title">${video.title}</h3>
                                <p class="video-channel">${video.channel}</p>
                            </div>
                        </a>
                    `;
                    
                    suggestionsGrid.appendChild(videoCard);
                });
                
                // Afficher le conteneur de suggestions
                suggestionsContainer.style.display = 'block';
            }
            
            // Événement de clic sur le bouton
            suggestBtn.addEventListener('click', showSuggestions);
        });
    </script>