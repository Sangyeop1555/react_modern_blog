# Git 

Git 설정하고 초기화 하기 

1. git init (git 초기화)
2. git config --list (git 환경설정)
3. git config --local user.name "git계정"
4. git config --local user.email "git이메일"  
(다계정시 사용방법입니다 )
5. git add -A || git add.   또는 git add 파일명 ( 파일만 변경할 때 )
   1. Working Directory(작업 디렉토리)
      1. 파일은 수정되었지만, git add를 하지 않아서 스테이징 영역에는 없는 상태 
      2. 실제로 파일을 수정하는 곳 
   2. Staging Area(스테이징 영역, 인덱스)
      1. 커밋(Commit)할 변경 사항을 잠시 올려두는 대기 공간.
      2. git add 명령어로 스테이징 영역에 파일을 옮길 수 있다. 
   3. Repositary(저장소, .git)
      1. 최종적으로 git commit 하면, 스테이징 영역에 있는 파일(폴더)가 git에 기록됨 
      2. feat: 새로운 기능 추가 
      3. fix: 버그 수정
      4. docs: 문서 수정 
      5. style: 코드 스타일 변경(추가)
      6. refactor: 리팩토링
      7. test: 테스트 코드 추가
      8. chore: 빌드 설정 변경
      9. git commit -m "fix: 로그인 시 빈 값을 입력해도 로그인 되던 현상 수정"
      10. git 
6. git config --global core.editor "code --wait"
      1. git config --global --unset core.editor   (취소 방법)