# Auto-generated test cases ( Kataw )
- Regenerated: 2021-06-06
- From: kataw8/test\__snapshot__/parser/miscellaneous/should-pass/autogen.md
- Path: kataw8/test\__snapshot__\parser\miscellaneous\should-pass\gen\stand-alone
> :: test: stand-alone
> :: case: /*
>            */ /* optional SingleLineDelimitedCommentSequence */-->the comment extends to these characters
## Input

`````js
/*
  */ /* optional SingleLineDelimitedCommentSequence */-->the comment extends to these characters
`````
## Output

### CST

```javascript
{
    "kind": 122,
    "directives": [],
    "statements": [],
    "isModule": false,
    "source": "/*\n  */ /* optional SingleLineDelimitedCommentSequence */-->the comment extends to these characters",
    "fileName": "__root__",
    "flags": 0,
    "start": 0,
    "end": 99
}
```

### Printed

```javascript
/*
  */ /* optional SingleLineDelimitedCommentSequence */

```

### Diagnostics

```javascript
✔ No errors
```

