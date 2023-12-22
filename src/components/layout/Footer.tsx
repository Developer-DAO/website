import {
  ArrowTopRightIcon,
  Body1,
  Body3,
  DDLogoIcon,
  GithubIcon,
  TwitterIcon,
  YoutubeIcon,
} from '@gordo-d/d-d-ui-components';
import Link from 'next/link';
import navData from '../../constants/footer.json';

const Footer = (props: any) => {
  return (
    <section className="absolute bottom-0 left-0 flex h-auto w-full justify-center md:h-40">
      <div className="mx-4 flex w-full flex-col md:items-start items-center justify-center gap-6 rounded-t-2xl bg-gradient-to-l from-neutral-500/10 to-neutral-700/10 p-3 py-5 backdrop-blur md:mx-10 md:flex-row md:justify-between md:p-6">
        <div className='md:basis-1/5'>
          <DDLogoIcon className=" h-10 w-10 flex-1 md:h-16 md:w-16" />
        </div>

        <div className="flex md:flex-1 h-full flex-col items-center justify-between">
          <ul className="font-paragraph hidden gap-8 md:flex">
            {navData.links.map((navEl, i) => (
              <Link
                className="flex gap-2"
                key={i}
                href={navEl.link}
                target={navEl.external ? '_blank' : '_self'}>
                <Body3
                  color="neutral-500"
                  className="hover:text-primary-white transition-colors">
                  {navEl.name}
                </Body3>
                {navEl.external && (
                  <ArrowTopRightIcon className=" opacity-70 hover:opacity-100" />
                )}
              </Link>
            ))}
          </ul>
          <Body3 color={'neutral-600'} className="hidden md:block">
            Built with 🤍️ at  
          <Link href={'https://agency.developerdao.com'}>
            <span className='underline pl-1 hover:text-red-400 transition-colors'>Agency</span>
          </Link>
          </Body3>
        </div>

        <div className="flex md:basis-1/5 flex-col items-center gap-3 md:items-end">
          <Body1 className="text-center font-extralight md:block">
            Follow us
          </Body1>
          <div className="flex gap-2">
            <Link href={'https://twitter.com/developerdao'} target="_blank">
              <div className="flex h-[40px] w-[40px] items-center justify-center rounded-full bg-neutral-700 p-3">
                <TwitterIcon />
              </div>
            </Link>
            <Link href={'https://youtube.com/developerdao'} target="_blank">
              <div className="flex h-[40px] w-[40px] items-center justify-center rounded-full bg-neutral-700 p-3">
                <YoutubeIcon />
              </div>
            </Link>
            <Link href={'https://github.com/developerdao'} target="_blank">
              <div className="flex h-[40px] w-[40px] items-center justify-center rounded-full bg-neutral-700 p-3">
                <GithubIcon />
              </div>
            </Link>
          </div>
          <div className="flex gap-2 ">
            <Link href={'/terms'}>
              <Body3 color="neutral-700" className="text-xs font-light">
                Terms & conditions
              </Body3>
            </Link>
            <Link href={'/privacy'}>
              <Body3 color="neutral-700" className="text-xs font-light">
                Privacy
              </Body3>
            </Link>
          </div>
        </div>
        <Body3 color={'neutral-600'} className=" md:hidden">
          Built with 🤍 at Agency
        </Body3>
      </div>
    </section>
  );
};

export default Footer;
