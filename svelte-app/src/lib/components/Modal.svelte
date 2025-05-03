<script>
    export let item;
    export let onClose;
  </script>
  
  <div class="modal-backdrop" on:click={onClose}>
    <div class="modal-content" on:click|stopPropagation>
      <button class="close-button" on:click={onClose}>×</button>
      <h1>{item.title}</h1>
      <img src={item.image} alt={item.title} />
      <p>{item.content}</p>
      <p><b>Software:</b> {item.software}</p>
      <p><b>Style:</b> {item.style}</p>
      <p><b>Date:</b> {item.date}</p>
    </div>
  </div>
  
  <style>
    .modal-backdrop {
      position: fixed;
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;
      background: rgba(0, 0, 0, 0.5);
      display: flex;
      justify-content: center;
      align-items: center;
    }
  
    .modal-content {
      background: white;
      padding: 2rem;
      border-radius: 10px;
      max-width: 500px;
      width: 90%;
    }
  
    .close-button {
      position: absolute;
      top: 10px;
      right: 10px;
      background: none;
      border: none;
      font-size: 1.5rem;
      cursor: pointer;
    }
  </style>