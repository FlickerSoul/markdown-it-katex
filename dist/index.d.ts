import { KatexOptions } from 'katex';
import MarkdownIt from "markdown-it";
type MdKatexOptions = KatexOptions & {
    enableBareBlocks?: boolean;
    enableMathBlockInHtml?: boolean;
    enableMathInlineInHtml?: boolean;
};
declare const _default: (md: MarkdownIt, options: MdKatexOptions) => void;
export = _default;
