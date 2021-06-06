# Auto-generated test cases ( Kataw )
- Regenerated: 2021-06-06
- From: kataw8/test\__snapshot__/parser/miscellaneous/should-pass/autogen.md
- Path: kataw8/test\__snapshot__\parser\miscellaneous\should-pass\gen\in_a_block
> :: test: in a block
> :: case: /* before */async function /* a */ f /* b */ ( /* c */ x /* d */ , /* e */ y /* f */ ) /* g */ { /* h */ ; /* i */ ; /* j */ }/* after */
## Input

`````js
{ /* before */async function /* a */ f /* b */ ( /* c */ x /* d */ , /* e */ y /* f */ ) /* g */ { /* h */ ; /* i */ ; /* j */ }/* after */ }
`````
## Output

### CST

```javascript
{
    "kind": 122,
    "directives": [],
    "statements": [
        {
            "kind": 124,
            "block": {
                "kind": 249,
                "statements": [
                    {
                        "kind": 176,
                        "declareKeyword": null,
                        "asyncKeyword": {
                            "kind": 82031,
                            "flags": 64,
                            "start": 1,
                            "end": 19
                        },
                        "functionKeyword": {
                            "kind": 37822554,
                            "flags": 64,
                            "start": 19,
                            "end": 28
                        },
                        "generatorToken": null,
                        "name": {
                            "kind": 134299649,
                            "text": "f",
                            "rawText": "f",
                            "flags": 96,
                            "start": 28,
                            "end": 38
                        },
                        "formalParameters": {
                            "kind": 214,
                            "formalParameterList": [
                                {
                                    "kind": 134299649,
                                    "text": "x",
                                    "rawText": "x",
                                    "flags": 96,
                                    "start": 48,
                                    "end": 58
                                },
                                {
                                    "kind": 134299649,
                                    "text": "y",
                                    "rawText": "y",
                                    "flags": 96,
                                    "start": 68,
                                    "end": 78
                                }
                            ],
                            "trailingComma": false,
                            "flags": 96,
                            "start": 38,
                            "end": 88
                        },
                        "contents": {
                            "kind": 216,
                            "functionStatementList": {
                                "kind": 217,
                                "directives": [],
                                "statements": [
                                    {
                                        "kind": 168,
                                        "flags": 16,
                                        "start": 98,
                                        "end": 108
                                    },
                                    {
                                        "kind": 168,
                                        "flags": 16,
                                        "start": 108,
                                        "end": 118
                                    }
                                ],
                                "flags": 32,
                                "start": 98,
                                "end": 118
                            },
                            "flags": 32,
                            "start": 88,
                            "end": 128
                        },
                        "typeParameters": null,
                        "returnType": null,
                        "flags": 144,
                        "start": 1,
                        "end": 128
                    }
                ],
                "flags": 16,
                "start": 1,
                "end": 128
            },
            "flags": 16,
            "start": 0,
            "end": 141
        }
    ],
    "isModule": false,
    "source": "{ /* before */async function /* a */ f /* b */ ( /* c */ x /* d */ , /* e */ y /* f */ ) /* g */ { /* h */ ; /* i */ ; /* j */ }/* after */ }",
    "fileName": "__root__",
    "flags": 0,
    "start": 0,
    "end": 141
}
```

### Printed

```javascript

{
  async function f /* b */(/* c */ x /* d */, /* e */ y /* f */) /* g */ {

  } /* after */
}
```

### Diagnostics

```javascript
✔ No errors
```

