import './Overlap.css';

const Overlap = () => {
    return (
        <div className="overlap">
        <div className="navigation-footer">
          <div className="items-2">
            <div className="text-wrapper-2">Topic</div>
            <div className="text-wrapper-3">Page</div>
            <div className="text-wrapper-3">Page</div>
            <div className="text-wrapper-3">Page</div>
          </div>
          <div className="text-wrapper-4">Site name</div>
          <img className="divider" alt="Divider" src="divider.svg" />
        </div>
        <div className="rectangle" />
        <img className="graphic-2" alt="Graphic" src={`${process.env.PUBLIC_URL}/images/user.png`} />
        <div className="frame">
          <div className="element-button">
            <div className="text-wrapper-5">임펙터</div>
          </div>
          <div className="div-wrapper">
            <div className="text-wrapper-6">크리에이터</div>
          </div>
          <div className="text-wrapper-7">회 정도 펀딩에 참여했어요</div>
          <img className="vector" alt="Vector" src={`${process.env.PUBLIC_URL}/images/Vector.svg`} />
          <div className="text-wrapper-8">25</div>
        </div>
        <div className="element-button-2">
          <div className="text-wrapper-6">크리에이터</div>
        </div>
        <div className="element-button-3">
          <div className="text-wrapper-5">임펙터</div>
        </div>
        <div className="text-wrapper-9">활동 목록</div>
        <div className="rectangle-2" />
        <div className="rectangle-3" />
        <div className="rectangle-4" />
        <div className="rectangle-5" />
        <div className="group">
          <div className="element-XX-XX-XX">
            프로젝트 제목
            <br />
            2024.XX.XX ~ 2025.XX.XX
          </div>
          <div className="text-wrapper-10">모집중 1/10</div>
          <p className="p">
            프로젝트 설명 프로젝트 설명 프로젝트 설명 프로젝트 설명 프로젝트 설명 프로젝트 설명 프로젝트 설명 프로젝트
            설명
          </p>
        </div>
        <div className="group-2">
          <div className="element-XX-XX-XX">
            프로젝트 제목
            <br />
            2024.XX.XX ~ 2025.XX.XX
          </div>
          <div className="text-wrapper-10">모집중 1/10</div>
          <p className="p">
            프로젝트 설명 프로젝트 설명 프로젝트 설명 프로젝트 설명 프로젝트 설명 프로젝트 설명 프로젝트 설명 프로젝트
            설명
          </p>
        </div>
        <div className="group-3">
          <div className="element-XX-XX-XX">
            프로젝트 제목
            <br />
            2024.XX.XX ~ 2025.XX.XX
          </div>
          <div className="text-wrapper-10">모집중 1/10</div>
          <p className="p">
            프로젝트 설명 프로젝트 설명 프로젝트 설명 프로젝트 설명 프로젝트 설명 프로젝트 설명 프로젝트 설명 프로젝트
            설명
          </p>
          <div className="group-4">
            <div className="element-XX-XX-XX">
              프로젝트 제목
              <br />
              2024.XX.XX ~ 2025.XX.XX
            </div>
            <div className="text-wrapper-10">모집중 1/10</div>
            <p className="p">
              프로젝트 설명 프로젝트 설명 프로젝트 설명 프로젝트 설명 프로젝트 설명 프로젝트 설명 프로젝트 설명 프로젝트
              설명
            </p>
          </div>
        </div>
      </div>
    )
}

export default Overlap;