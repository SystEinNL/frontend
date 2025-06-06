import Link from "next/link";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import Layout from "../../components/layout/layout";
import data from "../../data/post.json";
import comments from "../../data/comments.json";

const SingleVendor = () => {

    console.log(comments[1].reply[0]);

    let Router = useRouter()

    const [singleData, setSingleData] = useState(null);


    const { id } = Router.query;

    useEffect(() => {
        setSingleData(data.find((data) => data.id == id));
    }, [id]);


    return (<>
        {/* {singleData && (
            <>

                <img src={`/images/blog/${singleData.img}`} className="w-100 rounded" alt="" />
                <h3>{singleData.title}</h3>
            </>
        )} */}
        <Layout>
            {singleData && (
                <>
                    <main className="bg-grey pt-50 pb-50">
                        <div className="pb-50">
                            <div className="container">
                                <div className="row">
                                    <div className="col-lg-8">
                                        <div className="single-content2">
                                            <div className="entry-header entry-header-style-1 mb-50 pt-50">
                                                <h1 className="entry-title mb-50 font-weight-900">
                                                    {singleData.title}
                                                </h1>
                                                <div className="row">
                                                    <div className="col-md-6">
                                                        <div className="entry-meta align-items-center meta-2 font-small color-muted">
                                                            <p className="mb-5">
                                                                <Link href="/author" className="author-avatar">
                                                                    <img
                                                                        className="img-circle"
                                                                        src="/assets/imgs/authors/author-3.jpg"
                                                                        alt=""
                                                                    />
                                                                </Link>
                                                                By
                                                                <Link href="/author">
                                                                    <span className="author-name font-weight-bold">
                                                                        {singleData.author}
                                                                    </span>
                                                                </Link>
                                                            </p>
                                                            <span className="mr-10">

                                                                {singleData.date} {new Date().getFullYear()}
                                                            </span>
                                                            <span className="has-dot">

                                                                {singleData.readTime} mins read
                                                            </span>
                                                        </div>
                                                    </div>
                                                    <div className="col-md-6 text-right d-none d-md-inline">
                                                        <ul className="header-social-network d-inline-block list-inline mr-15">
                                                            <li className="list-inline-item text-muted">
                                                                <span>Share this: </span>
                                                            </li>
                                                            <li className="list-inline-item">
                                                                <a
                                                                    className="social-icon fb text-xs-center"
                                                                    target="_blank"
                                                                    href="#"
                                                                >
                                                                    <i className="elegant-icon social_facebook"></i>
                                                                </a>
                                                            </li>
                                                            <li className="list-inline-item">
                                                                <a
                                                                    className="social-icon tw text-xs-center"
                                                                    target="_blank"
                                                                    href="#"
                                                                >
                                                                    <i className="elegant-icon social_twitter "></i>
                                                                </a>
                                                            </li>
                                                            <li className="list-inline-item">
                                                                <a
                                                                    className="social-icon pt text-xs-center"
                                                                    target="_blank"
                                                                    href="#"
                                                                >
                                                                    <i className="elegant-icon social_pinterest "></i>
                                                                </a>
                                                            </li>
                                                        </ul>
                                                    </div>
                                                </div>
                                            </div>

                                            {/* <!--end single header--> */}
                                            <figure className="image mb-30 m-auto text-center border-radius-10">
                                                <img
                                                    className="border-radius-10"
                                                    src={`/assets/imgs/news/${singleData.img}`}
                                                    alt="post-title"
                                                />
                                            </figure>

                                            {/* <!--figure--> */}
                                            <article className="entry-wraper mb-50">
                                                <div className="excerpt mb-30">
                                                    <p>
                                                        Gosh jaguar ostrich quail
                                                        one excited dear hello and
                                                        bound and the and bland
                                                        moral misheard roadrunner
                                                        flapped lynx far that and
                                                        jeepers giggled far and far
                                                        bald that roadrunner python
                                                        inside held shrewdly the
                                                        manatee.
                                                    </p>
                                                </div>
                                                <div className="entry-main-content dropcap wow fadeIn animated">
                                                    <p>
                                                        Fretful human far recklessly
                                                        while caterpillar well a
                                                        well blubbered added one a
                                                        some far whispered rampantly
                                                        whispered while irksome far
                                                        clung irrespective wailed
                                                        more rosily and where
                                                        saluted while black dear so
                                                        yikes as considering recast
                                                        to some crass until.
                                                    </p>
                                                    <hr className="wp-block-separator is-style-dots" />
                                                    <p>
                                                        Thanks sniffed in hello
                                                        after in foolhardy and some
                                                        far purposefully much one at
                                                        the much conjointly leapt
                                                        skimpily that quail sheep
                                                        some goodness
                                                        <Link href="/#">nightingale
                                                                                                                            </Link>
                                                        the instead exited expedient
                                                        up far ouch mellifluous
                                                        altruistic and and lighted
                                                        more instead much when
                                                        ferret but the.
                                                    </p>
                                                    <figure className="wp-block-gallery columns-3 wp-block-image">
                                                        <ul className="blocks-gallery-grid">
                                                            <li className="blocks-gallery-item">
                                                                <Link href="/#">
                                                                    <img
                                                                        className="border-radius-5"
                                                                        src="/assets/imgs/news/thumb-2.jpg"
                                                                        alt=""
                                                                    />
                                                                </Link>
                                                            </li>
                                                            <li className="blocks-gallery-item">
                                                                <Link href="/#">
                                                                    <img
                                                                        className="border-radius-5"
                                                                        src="/assets/imgs/news/thumb-3.jpg"
                                                                        alt=""
                                                                    />
                                                                </Link>
                                                            </li>
                                                            <li className="blocks-gallery-item">
                                                                <Link href="/#">
                                                                    <img
                                                                        className="border-radius-5"
                                                                        src="/assets/imgs/news/thumb-4.jpg"
                                                                        alt=""
                                                                    />
                                                                </Link>
                                                            </li>
                                                        </ul>
                                                        <figcaption>

                                                            <i className="ti-credit-card mr-5"></i>
                                                            Image credit: Pexel
                                                        </figcaption>
                                                    </figure>
                                                    <hr className="section-divider" />
                                                    <p>
                                                        Yet more some certainly yet
                                                        alas abandonedly whispered
                                                        <Link href="/#">intriguingly
                                                                                                                            </Link>
                                                        <sup>
                                                            <Link href="/#">[2]</Link>
                                                        </sup>
                                                        well extensive one howled
                                                        talkative admonishingly
                                                        below a rethought overlaid
                                                        dear gosh activated less
                                                        <Link href="/#">however</Link>
                                                        hawk yet oh scratched
                                                        ostrich some outside crud
                                                        irrespective lightheartedly
                                                        and much far amenably that
                                                        the elephant since when.
                                                    </p>
                                                    <h2>The Guitar Legends</h2>
                                                    <p>
                                                        Furrowed this in the upset
                                                        <Link href="/#">some across
                                                                                                                            </Link>
                                                        <sup>
                                                            <Link href="/#">[3]</Link>
                                                        </sup>
                                                        tiger oh loaded house gosh
                                                        whispered
                                                        <Link href="/#">faltering alas
                                                                                                                            </Link>
                                                        <sup>
                                                            <Link href="/#">[4]</Link>
                                                        </sup>
                                                        ouch cuckoo coward in
                                                        scratched undid together bit
                                                        fumblingly so besides
                                                        salamander heron during the
                                                        jeepers hello fitting
                                                        jauntily much smoothly
                                                        globefish darn blessedly far
                                                        so along bluebird leopard
                                                        and.
                                                    </p>
                                                    <blockquote>
                                                        <p>
                                                            Integer eu faucibus
                                                            <Link href="/#">dolor</Link>
                                                            <sup>
                                                                <Link href="/#">[5]</Link>
                                                            </sup>
                                                            . Ut venenatis tincidunt
                                                            diam elementum
                                                            imperdiet. Etiam
                                                            accumsan semper nisl eu
                                                            congue. Sed aliquam
                                                            magna erat, ac eleifend
                                                            lacus rhoncus in.
                                                        </p>
                                                    </blockquote>
                                                    <p>
                                                        Fretful human far recklessly
                                                        while caterpillar well a
                                                        well blubbered added one a
                                                        some far whispered rampantly
                                                        whispered while irksome far
                                                        clung irrespective wailed
                                                        more rosily and where
                                                        saluted while black dear so
                                                        yikes as considering recast
                                                        to some crass until cow much
                                                        less and rakishly overdrew
                                                        consistent for by
                                                        responsible oh one
                                                        hypocritical less bastard
                                                        hey oversaw zebra browbeat a
                                                        well.
                                                    </p>
                                                    <h3>Getting Crypto Rich</h3>
                                                    <hr className="wp-block-separator is-style-wide" />
                                                    <div className="wp-block-image">
                                                        <figure className="alignleft is-resized">
                                                            <img
                                                                className="border-radius-5"
                                                                src="/assets/imgs/news/thumb-11.jpg"
                                                            />
                                                            <figcaption>

                                                                And far contrary
                                                                smoked some contrary
                                                                among stealthy
                                                            </figcaption>
                                                        </figure>
                                                    </div>
                                                    <p>
                                                        And far contrary smoked some
                                                        contrary among stealthy
                                                        engagingly suspiciously a
                                                        cockatoo far circa sank
                                                        dully lewd slick cracked
                                                        llama the much gecko yikes
                                                        more squirrel sniffed this
                                                        and the the much within
                                                        uninhibited this abominable
                                                        a blubbered overdid foresaw
                                                        through alas the
                                                        pessimistic.
                                                    </p>
                                                    <p>
                                                        Gosh jaguar ostrich quail
                                                        one excited dear hello and
                                                        bound and the and bland
                                                        moral misheard roadrunner
                                                        flapped lynx far that and
                                                        jeepers giggled far and far
                                                        bald that roadrunner python
                                                        inside held shrewdly the
                                                        manatee.
                                                    </p>
                                                    <hr className="section-divider" />
                                                    <p>
                                                        Thanks sniffed in hello
                                                        after in foolhardy and some
                                                        far purposefully much one at
                                                        the much conjointly leapt
                                                        skimpily that quail sheep
                                                        some goodness nightingale
                                                        the instead exited expedient
                                                        up far ouch mellifluous
                                                        altruistic and and lighted
                                                        more instead much when
                                                        ferret but the.
                                                    </p>
                                                    {/* <!--Begin Subcrible--> */}
                                                    <div className="border-radius-10 border bg-dark mb-30 p-30 wow fadeIn animated">
                                                        <div className="row justify-content-between">
                                                            <div className="col-md-5 mb-2 mb-md-0">
                                                                <h5 className="font-weight-bold secondfont mb-30 mt-0">
                                                                    Become a member
                                                                </h5>
                                                                <p className="font-small">
                                                                    Get the latest
                                                                    news right in
                                                                    your inbox. We
                                                                    never spam!
                                                                </p>
                                                            </div>
                                                            <div className="col-md-7">
                                                                <div className="row">
                                                                    <div className="col-md-12">
                                                                        <input
                                                                            type="text"
                                                                            className="form-control"
                                                                            placeholder="Enter your e-mail address"
                                                                        />
                                                                    </div>
                                                                    <div className="col-md-12 mt-2">
                                                                        <button
                                                                            type="submit"
                                                                            className="btn btn-primary btn-block"
                                                                        >
                                                                            Subscribe
                                                                        </button>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                    {/* <!--End Subcrible--> */}
                                                    <p>
                                                        Yet more some certainly yet
                                                        alas abandonedly whispered
                                                        intriguingly well extensive
                                                        one howled talkative
                                                        admonishingly below a
                                                        rethought overlaid dear gosh
                                                        activated less however hawk
                                                        yet oh scratched ostrich
                                                        some outside crud
                                                        irrespective lightheartedly
                                                        and much far amenably that
                                                        the elephant since when.
                                                    </p>
                                                </div>

                                                <div className="entry-bottom mt-50 mb-30 wow fadeIn animated">
                                                    <div className="tags">
                                                        <span>Tags: </span>

                                                        <Link href="/category">{singleData.tags[0]}</Link>
                                                        <Link href="/category">{singleData.tags[1]}</Link>
                                                        <Link href="/category">{singleData.tags[2]}</Link>
                                                    </div>
                                                </div>
                                                <div className="single-social-share clearfix wow fadeIn animated">
                                                    <div className="entry-meta meta-1 font-small color-grey float-left mt-10">
                                                        <span className="hit-count mr-15">
                                                            <i className="elegant-icon icon_comment_alt mr-5"></i>
                                                            {singleData.comments} comments
                                                        </span>
                                                        <span className="hit-count mr-15">
                                                            <i className="elegant-icon icon_like mr-5"></i>
                                                            {singleData.likes} likes
                                                        </span>
                                                        <span className="hit-count">
                                                            <i className="elegant-icon icon_star-half_alt mr-5"></i>
                                                            Rate: {singleData.rating}/10
                                                        </span>
                                                    </div>
                                                    <ul className="header-social-network d-inline-block list-inline float-md-right mt-md-0 mt-4">
                                                        <li className="list-inline-item text-muted">
                                                            <span>
                                                                Share this:
                                                            </span>
                                                        </li>
                                                        <li className="list-inline-item">
                                                            <Link href="/#" className="social-icon fb text-xs-center">
                                                                <i className="elegant-icon social_facebook"></i>
                                                            </Link>
                                                        </li>
                                                        <li className="list-inline-item">
                                                            <Link href="/#" className="social-icon tw text-xs-center">
                                                                <i className="elegant-icon social_twitter "></i>
                                                            </Link>
                                                        </li>
                                                        <li className="list-inline-item">
                                                            <Link href="/#" className="social-icon pt text-xs-center">
                                                                <i className="elegant-icon social_pinterest "></i>
                                                            </Link>
                                                        </li>
                                                    </ul>
                                                </div>
                                                {/* <!--author box--> */}
                                                <div className="author-bio p-30 mt-50 border-radius-10 bg-dark wow fadeIn animated">
                                                    <div className="author-image mb-30">
                                                        <Link href="/author">
                                                            <img
                                                                src="/assets/imgs/authors/author-3.jpg"
                                                                alt=""
                                                                className="avatar"
                                                            />
                                                        </Link>
                                                    </div>
                                                    <div className="author-info">
                                                        <h4 className="font-weight-bold mb-20">
                                                            <span className="vcard author">
                                                                <span className="fn">
                                                                    <Link href="/author">
                                                                        {singleData.author}
                                                                    </Link>
                                                                </span>
                                                            </span>
                                                        </h4>
                                                        <h5 className="text-muted">
                                                            About author
                                                        </h5>
                                                        <div className="author-description text-muted">
                                                            You should write because
                                                            you love the shape of
                                                            stories and sentences
                                                            and the creation of
                                                            different words on a
                                                            page.
                                                        </div>
                                                        <Link href="/author" className="author-bio-link mb-md-0 mb-3">
                                                            View all posts ({singleData.totalPost})
                                                        </Link>
                                                        <div className="author-social">
                                                            <ul className="author-social-icons">
                                                                <li className="author-social-link-facebook">
                                                                    <Link href="/#">
                                                                        <i className="ti-facebook"></i>
                                                                    </Link>
                                                                </li>
                                                                <li className="author-social-link-twitter">
                                                                    <Link href="/#">
                                                                        <i className="ti-twitter-alt"></i>
                                                                    </Link>
                                                                </li>
                                                                <li className="author-social-link-pinterest">
                                                                    <Link href="/#">
                                                                        <i className="ti-pinterest"></i>
                                                                    </Link>
                                                                </li>
                                                                <li className="author-social-link-instagram">
                                                                    <Link href="/#">
                                                                        <i className="ti-instagram"></i>
                                                                    </Link>
                                                                </li>
                                                            </ul>
                                                        </div>
                                                    </div>
                                                </div>
                                                {/* <!--related posts--> */}
                                                <div className="related-posts">
                                                    <div className="post-module-3">
                                                        <div className="widget-header-2 position-relative mb-30">
                                                            <h5 className="mt-5 mb-30">
                                                                Related posts
                                                            </h5>
                                                        </div>
                                                        <div className="loop-list loop-list-style-1">
                                                            {data.slice(1, 3).map((item, i) => (
                                                                <article className="hover-up-2 transition-normal wow fadeInUp animated">
                                                                    <div className="row mb-40 list-style-2">
                                                                        <div className="col-md-4">
                                                                            <div className="post-thumb position-relative border-radius-5">
                                                                                <div
                                                                                    className="img-hover-slide border-radius-5 position-relative"
                                                                                    style={{ backgroundImage: `url(/assets/imgs/news/${item.img})` }}
                                                                                >
                                                                                    <Link href={`/blog/${item.id}`} className="img-link"></Link>
                                                                                </div>
                                                                                <ul className="social-share">
                                                                                    <li>
                                                                                        <Link href="/#">
                                                                                            <i className="elegant-icon social_share"></i>
                                                                                        </Link>
                                                                                    </li>
                                                                                    <li>
                                                                                        <Link href="/#" className="fb">
                                                                                            <i className="elegant-icon social_facebook"></i>
                                                                                        </Link>
                                                                                    </li>
                                                                                    <li>
                                                                                        <Link href="/#" className="tw">
                                                                                            <i className="elegant-icon social_twitter"></i>
                                                                                        </Link>
                                                                                    </li>
                                                                                    <li>
                                                                                        <Link href="/#" className="pt">
                                                                                            <i className="elegant-icon social_pinterest"></i>
                                                                                        </Link>
                                                                                    </li>
                                                                                </ul>
                                                                            </div>
                                                                        </div>
                                                                        <div className="col-md-8 align-self-center">
                                                                            <div className="post-content">
                                                                                <div className="entry-meta meta-0 font-small mb-10">
                                                                                    <Link href={`/blog/${item.id}`}>
                                                                                        <span className="post-cat text-primary">
                                                                                            {item.category}
                                                                                        </span>
                                                                                    </Link>
                                                                                </div>
                                                                                <h5 className="post-title font-weight-900 mb-20">
                                                                                    <Link href={`/blog/${item.id}`}>
                                                                                        {item.title}
                                                                                    </Link>
                                                                                    <span className="post-format-icon">
                                                                                        <i className="elegant-icon icon_star_alt"></i>
                                                                                    </span>
                                                                                </h5>
                                                                                <div className="entry-meta meta-1 float-left font-x-small text-uppercase">
                                                                                    <span className="post-on">
                                                                                        {item.date}
                                                                                    </span>
                                                                                    <span className="time-reading has-dot">
                                                                                        {item.readTime} mins read
                                                                                    </span>
                                                                                    <span className="post-by has-dot">
                                                                                        {item.views} views
                                                                                    </span>
                                                                                </div>
                                                                            </div>
                                                                        </div>
                                                                    </div>
                                                                </article>
                                                            ))}
                                                        </div>
                                                    </div>
                                                </div>
                                                {/* <!--More posts--> */}
                                                <div className="single-more-articles border-radius-5">
                                                    <div className="widget-header-2 position-relative mb-30">
                                                        <h5 className="mt-5 mb-30">
                                                            You might be interested
                                                            in
                                                        </h5>
                                                        <button className="single-more-articles-close">
                                                            <i className="elegant-icon icon_close"></i>
                                                        </button>
                                                    </div>
                                                    <div className="post-block-list post-module-1 post-module-5">
                                                        <ul className="list-post">
                                                            <li className="mb-30">
                                                                <div className="d-flex hover-up-2 transition-normal">
                                                                    <div className="post-thumb post-thumb-80 d-flex mr-15 border-radius-5 img-hover-scale overflow-hidden">
                                                                        <Link href="/single" className="color-white">
                                                                            <img
                                                                                src="/assets/imgs/news/thumb-1.jpg"
                                                                                alt=""
                                                                            />
                                                                        </Link>
                                                                    </div>
                                                                    <div className="post-content media-body">
                                                                        <h6 className="post-title mb-15 text-limit-2-row font-medium">
                                                                            <Link href="/single">The
                                                                                                                                                                        Best
                                                                                                                                                                        Time
                                                                                                                                                                        to
                                                                                                                                                                        Travel
                                                                                                                                                                        to
                                                                                                                                                                        Cambodia
                                                                                                                                                                    </Link>
                                                                        </h6>
                                                                        <div className="entry-meta meta-1 float-left font-x-small text-uppercase">
                                                                            <span className="post-on">
                                                                                27
                                                                                Jan
                                                                            </span>
                                                                            <span className="post-by has-dot">
                                                                                13k
                                                                                views
                                                                            </span>
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                            </li>
                                                            <li className="mb-10">
                                                                <div className="d-flex hover-up-2 transition-normal">
                                                                    <div className="post-thumb post-thumb-80 d-flex mr-15 border-radius-5 img-hover-scale overflow-hidden">
                                                                        <Link href="/single" className="color-white">
                                                                            <img
                                                                                src="/assets/imgs/news/thumb-2.jpg"
                                                                                alt=""
                                                                            />
                                                                        </Link>
                                                                    </div>
                                                                    <div className="post-content media-body">
                                                                        <h6 className="post-title mb-15 text-limit-2-row font-medium">
                                                                            <Link href="/single">20
                                                                                                                                                                        Photos
                                                                                                                                                                        to
                                                                                                                                                                        Inspire
                                                                                                                                                                        You
                                                                                                                                                                        to
                                                                                                                                                                        Visit
                                                                                                                                                                        Cambodia
                                                                                                                                                                    </Link>
                                                                        </h6>
                                                                        <div className="entry-meta meta-1 float-left font-x-small text-uppercase">
                                                                            <span className="post-on">
                                                                                27
                                                                                August
                                                                            </span>
                                                                            <span className="post-by has-dot">
                                                                                14k
                                                                                views
                                                                            </span>
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                            </li>
                                                        </ul>
                                                    </div>
                                                </div>
                                                {/* <!--Comments--> */}
                                                <div className="comments-area">
                                                    <div className="widget-header-2 position-relative mb-30">
                                                        <h5 className="mt-5 mb-30">
                                                            Comments
                                                        </h5>
                                                    </div>
                                                    {comments.map((item, i) => (
                                                        <div className="comment-list wow fadeIn animated">
                                                            <div className="single-comment justify-content-between d-flex">
                                                                <div className="user justify-content-between d-flex">
                                                                    <div className="thumb">
                                                                        <img
                                                                            src={`/assets/imgs/authors/${item.img}`}
                                                                            alt=""
                                                                        />
                                                                    </div>
                                                                    <div className="desc">
                                                                        <p className="comment">
                                                                            {item.desc}
                                                                        </p>
                                                                        <div className="d-flex justify-content-between">
                                                                            <div className="d-flex align-items-center">
                                                                                <h5>
                                                                                    <Link href="/#">
                                                                                        {item.name}
                                                                                    </Link>
                                                                                </h5>
                                                                                <p className="date">
                                                                                    {item.date} {new Date().getFullYear()} at {item.time}

                                                                                </p>
                                                                            </div>
                                                                            <div className="reply-btn">
                                                                                <Link href="/#" className="btn-reply">Reply
                                                                                                                                                                            </Link>
                                                                            </div>
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                            {item.reply && item.reply.map((cmntr, i) => ((
                                                                <>
                                                                    <div className="single-comment depth-2 justify-content-between d-flex mt-50">
                                                                        <div className="user justify-content-between d-flex">
                                                                            <div className="thumb">
                                                                                <img
                                                                                    src={`/assets/imgs/authors/${cmntr.img}`}
                                                                                    alt=""
                                                                                />
                                                                            </div>
                                                                            <div className="desc">
                                                                                <p className="comment">
                                                                                    {cmntr.desc}
                                                                                </p>
                                                                                <div className="d-flex justify-content-between">
                                                                                    <div className="d-flex align-items-center">
                                                                                        <h5>
                                                                                            <Link href="/#">
                                                                                                {cmntr.name}
                                                                                            </Link>
                                                                                        </h5>
                                                                                        <p className="date">
                                                                                            {cmntr.date} {new Date().getFullYear()} at {cmntr.time}

                                                                                        </p>
                                                                                    </div>
                                                                                    <div className="reply-btn">
                                                                                        <Link href="/#" className="btn-reply">Reply
                                                                                                                                                                                            </Link>
                                                                                    </div>
                                                                                </div>
                                                                            </div>
                                                                        </div>
                                                                    </div>
                                                                </>

                                                            )))}

                                                        </div>

                                                    ))}
                                                </div>
                                                {/* <!--comment form--> */}
                                                <div className="comment-form wow fadeIn animated">
                                                    <div className="widget-header-2 position-relative mb-30">
                                                        <h5 className="mt-5 mb-30">
                                                            Leave a Reply
                                                        </h5>
                                                    </div>
                                                    <form
                                                        className="form-contact comment_form"
                                                        action="#"
                                                        id="commentForm"
                                                    >
                                                        <div className="row">
                                                            <div className="col-12">
                                                                <div className="form-group">
                                                                    <textarea
                                                                        className="form-control w-100"
                                                                        name="comment"
                                                                        id="comment"
                                                                        cols="30"
                                                                        rows="9"
                                                                        placeholder="Write Comment"
                                                                    ></textarea>
                                                                </div>
                                                            </div>
                                                            <div className="col-sm-6">
                                                                <div className="form-group">
                                                                    <input
                                                                        className="form-control"
                                                                        name="name"
                                                                        id="name"
                                                                        type="text"
                                                                        placeholder="Name"
                                                                    />
                                                                </div>
                                                            </div>
                                                            <div className="col-sm-6">
                                                                <div className="form-group">
                                                                    <input
                                                                        className="form-control"
                                                                        name="email"
                                                                        id="email"
                                                                        type="email"
                                                                        placeholder="Email"
                                                                    />
                                                                </div>
                                                            </div>
                                                            <div className="col-12">
                                                                <div className="form-group">
                                                                    <input
                                                                        className="form-control"
                                                                        name="website"
                                                                        id="website"
                                                                        type="text"
                                                                        placeholder="Website"
                                                                    />
                                                                </div>
                                                            </div>
                                                        </div>
                                                        <div className="form-group">
                                                            <button
                                                                type="submit"
                                                                className="btn button button-contactForm"
                                                            >
                                                                Post Comment
                                                            </button>
                                                        </div>
                                                    </form>
                                                </div>
                                            </article>
                                        </div>
                                    </div>
                                    <div className="col-lg-4 primary-sidebar sticky-sidebar">
                                        <div className="widget-area">
                                            <div className="sidebar-widget widget-about mb-50 pt-30 pr-30 pb-30 pl-30 bg-dark border-radius-5 has-border  wow fadeInUp animated">
                                                <img
                                                    className="about-author-img mb-25"
                                                    src="/assets/imgs/authors/author.jpg"
                                                    alt=""
                                                />
                                                <h5 className="mb-20">
                                                    Hello, I'm Steven
                                                </h5>
                                                <p className="font-medium text-muted">
                                                    Hi, I’m Stenven, a Florida
                                                    native, who left my career in
                                                    corporate wealth management six
                                                    years ago to embark on a summer
                                                    of soul searching that would
                                                    change the course of my life
                                                    forever.
                                                </p>
                                                <strong>Follow me: </strong>
                                                <ul className="header-social-network d-inline-block list-inline color-white mb-20">
                                                    <li className="list-inline-item">
                                                        <Link href="/#" className="fb">
                                                            <i className="elegant-icon social_facebook"></i>
                                                        </Link>
                                                    </li>
                                                    <li className="list-inline-item">
                                                        <Link href="/#" className="tw">
                                                            <i className="elegant-icon social_twitter"></i>
                                                        </Link>
                                                    </li>
                                                    <li className="list-inline-item">
                                                        <Link href="/#" className="pt">
                                                            <i className="elegant-icon social_pinterest"></i>
                                                        </Link>
                                                    </li>
                                                </ul>
                                            </div>
                                            <div className="sidebar-widget widget-latest-posts mb-50 wow fadeInUp animated">
                                                <div className="widget-header-2 position-relative mb-30">
                                                    <h5 className="mt-5 mb-30">
                                                        Most popular
                                                    </h5>
                                                </div>
                                                <div className="post-block-list post-module-1">
                                                    <ul className="list-post">
                                                        <li className="mb-30 wow fadeInUp animated">
                                                            <div className="d-flex bg-dark has-border p-25 hover-up transition-normal border-radius-5">
                                                                <div className="post-content media-body">
                                                                    <h6 className="post-title mb-15 text-limit-2-row font-medium">
                                                                        <Link href="/single">Spending
                                                                                                                                                                Some
                                                                                                                                                                Quality
                                                                                                                                                                Time
                                                                                                                                                                with
                                                                                                                                                                Kids?
                                                                                                                                                                It’s
                                                                                                                                                                Possible
                                                                                                                                                            </Link>
                                                                    </h6>
                                                                    <div className="entry-meta meta-1 float-left font-x-small text-uppercase">
                                                                        <span className="post-on">
                                                                            05
                                                                            August
                                                                        </span>
                                                                        <span className="post-by has-dot">
                                                                            150
                                                                            views
                                                                        </span>
                                                                    </div>
                                                                </div>
                                                                <div className="post-thumb post-thumb-80 d-flex ml-15 border-radius-5 img-hover-scale overflow-hidden">
                                                                    <Link href="/single" className="color-white">
                                                                        <img
                                                                            src="/assets/imgs/news/thumb-6.jpg"
                                                                            alt=""
                                                                        />
                                                                    </Link>
                                                                </div>
                                                            </div>
                                                        </li>
                                                        <li className="mb-30 wow fadeInUp animated">
                                                            <div className="d-flex bg-dark has-border p-25 hover-up transition-normal border-radius-5">
                                                                <div className="post-content media-body">
                                                                    <h6 className="post-title mb-15 text-limit-2-row font-medium">
                                                                        <Link href="/single">Relationship
                                                                                                                                                                Podcasts
                                                                                                                                                                are
                                                                                                                                                                Having
                                                                                                                                                                “That”
                                                                                                                                                                Talk
                                                                                                                                                            </Link>
                                                                    </h6>
                                                                    <div className="entry-meta meta-1 float-left font-x-small text-uppercase">
                                                                        <span className="post-on">
                                                                            12
                                                                            August
                                                                        </span>
                                                                        <span className="post-by has-dot">
                                                                            6k views
                                                                        </span>
                                                                    </div>
                                                                </div>
                                                                <div className="post-thumb post-thumb-80 d-flex ml-15 border-radius-5 img-hover-scale overflow-hidden">
                                                                    <Link href="/single" className="color-white">
                                                                        <img
                                                                            src="/assets/imgs/news/thumb-7.jpg"
                                                                            alt=""
                                                                        />
                                                                    </Link>
                                                                </div>
                                                            </div>
                                                        </li>
                                                        <li className="mb-30 wow fadeInUp animated">
                                                            <div className="d-flex bg-dark has-border p-25 hover-up transition-normal border-radius-5">
                                                                <div className="post-content media-body">
                                                                    <h6 className="post-title mb-15 text-limit-2-row font-medium">
                                                                        <Link href="/single">Here’s
                                                                                                                                                                How
                                                                                                                                                                to
                                                                                                                                                                Get
                                                                                                                                                                the
                                                                                                                                                                Best
                                                                                                                                                                Sleep
                                                                                                                                                                at
                                                                                                                                                                Night
                                                                                                                                                            </Link>
                                                                    </h6>
                                                                    <div className="entry-meta meta-1 float-left font-x-small text-uppercase">
                                                                        <span className="post-on">
                                                                            15
                                                                            August
                                                                        </span>
                                                                        <span className="post-by has-dot">
                                                                            16k
                                                                            views
                                                                        </span>
                                                                    </div>
                                                                </div>
                                                                <div className="post-thumb post-thumb-80 d-flex ml-15 border-radius-5 img-hover-scale overflow-hidden">
                                                                    <Link href="/single" className="color-white">
                                                                        <img
                                                                            src="/assets/imgs/news/thumb-2.jpg"
                                                                            alt=""
                                                                        />
                                                                    </Link>
                                                                </div>
                                                            </div>
                                                        </li>
                                                        <li className=" wow fadeInUp animated">
                                                            <div className="d-flex bg-dark has-border p-25 hover-up transition-normal border-radius-5">
                                                                <div className="post-content media-body">
                                                                    <h6 className="post-title mb-15 text-limit-2-row font-medium">
                                                                        <Link href="/single">America’s
                                                                                                                                                                Governors
                                                                                                                                                                Get
                                                                                                                                                                Tested
                                                                                                                                                                for
                                                                                                                                                                a
                                                                                                                                                                Virus
                                                                                                                                                                That
                                                                                                                                                                Is
                                                                                                                                                                Testing
                                                                                                                                                                Them
                                                                                                                                                            </Link>
                                                                    </h6>
                                                                    <div className="entry-meta meta-1 float-left font-x-small text-uppercase">
                                                                        <span className="post-on">
                                                                            12
                                                                            August
                                                                        </span>
                                                                        <span className="post-by has-dot">
                                                                            3k views
                                                                        </span>
                                                                    </div>
                                                                </div>
                                                                <div className="post-thumb post-thumb-80 d-flex ml-15 border-radius-5 img-hover-scale overflow-hidden">
                                                                    <Link href="/single" className="color-white">
                                                                        <img
                                                                            src="/assets/imgs/news/thumb-3.jpg"
                                                                            alt=""
                                                                        />
                                                                    </Link>
                                                                </div>
                                                            </div>
                                                        </li>
                                                    </ul>
                                                </div>
                                            </div>
                                            <div className="sidebar-widget widget-latest-posts mb-50 wow fadeInUp animated">
                                                <div className="widget-header-2 position-relative mb-30">
                                                    <h5 className="mt-5 mb-30">
                                                        Last comments
                                                    </h5>
                                                </div>
                                                <div className="post-block-list post-module-2">
                                                    <ul className="list-post">
                                                        <li className="mb-30 wow fadeInUp animated">
                                                            <div className="d-flex bg-dark has-border p-25 hover-up transition-normal border-radius-5">
                                                                <div className="post-thumb post-thumb-64 d-flex mr-15 border-radius-5 img-hover-scale overflow-hidden">
                                                                    <Link href="/single" className="color-white">
                                                                        <img
                                                                            src="/assets/imgs/authors/author-2.jpg"
                                                                            alt=""
                                                                        />
                                                                    </Link>
                                                                </div>
                                                                <div className="post-content media-body">
                                                                    <p className="mb-10">
                                                                        <Link href="/author">
                                                                            <strong>
                                                                                David
                                                                            </strong>
                                                                        </Link>
                                                                        <span className="ml-15 font-small text-muted has-dot">
                                                                            16 Jan
                                                                            2020
                                                                        </span>
                                                                    </p>
                                                                    <p className="text-muted font-small">
                                                                        A writer is
                                                                        someone for
                                                                        whom writing
                                                                        is more
                                                                        difficult
                                                                        than...
                                                                    </p>
                                                                </div>
                                                            </div>
                                                        </li>
                                                        <li className="mb-30 wow fadeInUp animated">
                                                            <div className="d-flex bg-dark has-border p-25 hover-up transition-normal border-radius-5">
                                                                <div className="post-thumb post-thumb-64 d-flex mr-15 border-radius-5 img-hover-scale overflow-hidden">
                                                                    <Link href="/single" className="color-white">
                                                                        <img
                                                                            src="/assets/imgs/authors/author-3.jpg"
                                                                            alt=""
                                                                        />
                                                                    </Link>
                                                                </div>
                                                                <div className="post-content media-body">
                                                                    <p className="mb-10">
                                                                        <Link href="/author">
                                                                            <strong>
                                                                                Kokawa
                                                                            </strong>
                                                                        </Link>
                                                                        <span className="ml-15 font-small text-muted has-dot">
                                                                            12 Feb
                                                                            2020
                                                                        </span>
                                                                    </p>
                                                                    <p className="text-muted font-small">
                                                                        Striking
                                                                        pewter
                                                                        studded
                                                                        epaulettes
                                                                        silver zips
                                                                    </p>
                                                                </div>
                                                            </div>
                                                        </li>
                                                        <li className="wow fadeInUp animated">
                                                            <div className="d-flex bg-dark has-border p-25 hover-up transition-normal border-radius-5">
                                                                <div className="post-thumb post-thumb-64 d-flex mr-15 border-radius-5 img-hover-scale overflow-hidden">
                                                                    <Link href="/single" className="color-white">
                                                                        <img
                                                                            src="/assets/imgs/news/thumb-1.jpg"
                                                                            alt=""
                                                                        />
                                                                    </Link>
                                                                </div>
                                                                <div className="post-content media-body">
                                                                    <p className="mb-10">
                                                                        <Link href="/author">
                                                                            <strong>
                                                                                Tsukasi
                                                                            </strong>
                                                                        </Link>
                                                                        <span className="ml-15 font-small text-muted has-dot">
                                                                            18 May
                                                                            2020
                                                                        </span>
                                                                    </p>
                                                                    <p className="text-muted font-small">
                                                                        Workwear bow
                                                                        detailing a
                                                                        slingback
                                                                        buckle strap
                                                                    </p>
                                                                </div>
                                                            </div>
                                                        </li>
                                                    </ul>
                                                </div>
                                            </div>
                                            <div className="sidebar-widget widget_instagram wow fadeInUp animated">
                                                <div className="widget-header-2 position-relative mb-30">
                                                    <h5 className="mt-5 mb-30">
                                                        Instagram
                                                    </h5>
                                                </div>
                                                <div className="instagram-gellay">
                                                    <ul className="insta-feed">
                                                        <li>
                                                            <a
                                                                href="assets/imgs/thumbnail-3.jpg"
                                                                className="play-video"
                                                                data-animate="zoomIn"
                                                                data-duration="1.5s"
                                                                data-delay="0.1s"
                                                            >
                                                                <img
                                                                    className="border-radius-5"
                                                                    src="/assets/imgs/news/thumb-1.jpg"
                                                                    alt=""
                                                                />
                                                            </a>
                                                        </li>
                                                        <li>
                                                            <a
                                                                href="assets/imgs/thumbnail-4.jpg"
                                                                className="play-video"
                                                                data-animate="zoomIn"
                                                                data-duration="1.5s"
                                                                data-delay="0.1s"
                                                            >
                                                                <img
                                                                    className="border-radius-5"
                                                                    src="/assets/imgs/news/thumb-2.jpg"
                                                                    alt=""
                                                                />
                                                            </a>
                                                        </li>
                                                        <li>
                                                            <a
                                                                href="assets/imgs/thumbnail-5.jpg"
                                                                className="play-video"
                                                                data-animate="zoomIn"
                                                                data-duration="1.5s"
                                                                data-delay="0.1s"
                                                            >
                                                                <img
                                                                    className="border-radius-5"
                                                                    src="/assets/imgs/news/thumb-3.jpg"
                                                                    alt=""
                                                                />
                                                            </a>
                                                        </li>
                                                        <li>
                                                            <a
                                                                href="assets/imgs/thumbnail-3.jpg"
                                                                className="play-video"
                                                                data-animate="zoomIn"
                                                                data-duration="1.5s"
                                                                data-delay="0.1s"
                                                            >
                                                                <img
                                                                    className="border-radius-5"
                                                                    src="/assets/imgs/news/thumb-4.jpg"
                                                                    alt=""
                                                                />
                                                            </a>
                                                        </li>
                                                        <li>
                                                            <a
                                                                href="assets/imgs/thumbnail-4.jpg"
                                                                className="play-video"
                                                                data-animate="zoomIn"
                                                                data-duration="1.5s"
                                                                data-delay="0.1s"
                                                            >
                                                                <img
                                                                    className="border-radius-5"
                                                                    src="/assets/imgs/news/thumb-5.jpg"
                                                                    alt=""
                                                                />
                                                            </a>
                                                        </li>
                                                        <li>
                                                            <a
                                                                href="assets/imgs/thumbnail-5.jpg"
                                                                className="play-video"
                                                                data-animate="zoomIn"
                                                                data-duration="1.5s"
                                                                data-delay="0.1s"
                                                            >
                                                                <img
                                                                    className="border-radius-5"
                                                                    src="/assets/imgs/news/thumb-6.jpg"
                                                                    alt=""
                                                                />
                                                            </a>
                                                        </li>
                                                    </ul>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </main>
                </>
            )}
        </Layout>
    </>);
};



export default SingleVendor;