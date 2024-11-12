async function deleteEntry(id) {//
    if (confirm("정말로 삭제하시겠습니까?")) {
      try {
        const response = await fetch(`/guestbook/${id}`, {
          method: 'DELETE',
          headers: {
            'Content-Type': 'application/json',
          },
        });
        if (response.ok) {
          location.reload(); // 페이지 새로고침
        } else {
          alert("삭제에 실패했습니다.");
        }
      } catch (error) {
        console.error("에러:", error);
        alert("에러가 발생했습니다.");
      }
    }
  }

  async function editEntry(id, author, message) {
    try {
      const response = await fetch(`/guestbook/${id}`, {
        method: 'PATCH',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ author, message }), // 업데이트할 데이터를 body에 포함
      });
      if (response.ok) {
        location.reload(); // 페이지 새로고침
      } else {
        alert("수정에 실패했습니다.");
      }
    } catch (error) {
      console.error("에러:", error);
      alert("에러가 발생했습니다.");
    }
  }

const deleteButtons = document.querySelectorAll('.delete-button');
deleteButtons.forEach(button => {
    button.addEventListener('click', (e) => {
      e.preventDefault();
      deleteEntry(e.target.id); 
    });
});

document.addEventListener('DOMContentLoaded', () => {
    const editButtons = document.querySelectorAll('.edit-button');
    editButtons.forEach(button => {
      button.addEventListener('click', (e) => {
        e.preventDefault();
        const entryId = e.target.id;
        const entryDiv = document.querySelector(`.entry[data-id="${entryId}"]`);
  
        const authorDiv = entryDiv.querySelector('.author');
        const messageDiv = entryDiv.querySelector('.message');
        const editButton = entryDiv.querySelector('.edit-button');
        const saveButton = entryDiv.querySelector('.save-button');
  
        // 기존 내용으로 input과 textarea 필드 생성
        const authorInput = document.createElement('input');
        authorInput.type = 'text';
        authorInput.value = authorDiv.innerText;
        authorInput.classList.add('edit-author');
  
        const messageTextarea = document.createElement('textarea');
        messageTextarea.innerText = messageDiv.innerText;
        messageTextarea.classList.add('edit-message');
  
        // 기존 내용 숨기고 input과 textarea로 대체
        authorDiv.style.display = 'none';
        messageDiv.style.display = 'none';
        editButton.style.display = 'none';
        saveButton.style.display = 'inline';
  
        authorDiv.parentNode.insertBefore(authorInput, authorDiv);
        messageDiv.parentNode.insertBefore(messageTextarea, messageDiv);
  
        // 저장 버튼 클릭 이벤트
        saveButton.addEventListener('click', (e) => {
          e.preventDefault();
          const updatedAuthor = authorInput.value;
          const updatedMessage = messageTextarea.value;
            
          editEntry(e.target.id, updatedAuthor, updatedMessage);
        });
      });
    });
  });
  

