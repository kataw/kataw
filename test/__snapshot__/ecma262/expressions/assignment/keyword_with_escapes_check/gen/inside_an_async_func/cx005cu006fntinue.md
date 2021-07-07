# Auto-generated test cases ( Kataw )
- From: kataw/test/__snapshot__/ecma262/expressions/assignment/keyword_with_escapes_check/autogen.md
- Path: kataw/test/__snapshot__/ecma262/expressions/assignment/keyword_with_escapes_check/gen/inside_an_async_func
> :: test: inside an async func
> :: case: c\u006fntinue
## Options

`````js
{}
`````
## Input

`````js
async () => {  c\u006fntinue = x  }
`````
## Output

### CST

```javascript
{
    "kind": 122,
    "directives": [],
    "statements": [
        {
            "kind": 120,
            "expression": {
                "kind": 271,
                "asyncKeyword": {
                    "kind": 82031,
                    "flags": 64,
                    "transformFlags": 0,
                    "start": 0,
                    "end": 5
                },
                "typeParameters": null,
                "arrowPatameterList": {
                    "kind": 342,
                    "parameters": [],
                    "trailingComma": false,
                    "flags": 32,
                    "transformFlags": 0,
                    "start": 7,
                    "end": 7
                },
                "returnType": null,
                "arrowToken": {
                    "kind": 10,
                    "flags": 64,
                    "transformFlags": 0,
                    "start": 8,
                    "end": 11
                },
                "contents": {
                    "kind": 216,
                    "functionStatementList": {
                        "kind": 217,
                        "directives": [],
                        "statements": [
                            {
                                "kind": 172,
                                "continueKeyword": {
                                    "kind": 37757009,
                                    "flags": 16464,
                                    "transformFlags": 0,
                                    "start": 13,
                                    "end": 28
                                },
                                "label": {
                                    "kind": 16637,
                                    "text": "",
                                    "rawText": "",
                                    "flags": 64,
                                    "transformFlags": 0,
                                    "start": 28,
                                    "end": 28
                                },
                                "flags": 16,
                                "transformFlags": 0,
                                "start": 13,
                                "end": 28
                            }
                        ],
                        "flags": 16416,
                        "transformFlags": 0,
                        "start": 13,
                        "end": 28
                    },
                    "flags": 32,
                    "transformFlags": 0,
                    "start": 11,
                    "end": 28
                },
                "flags": 288,
                "transformFlags": 0,
                "start": 0,
                "end": 28
            },
            "flags": 16,
            "transformFlags": 4096,
            "start": 0,
            "end": 28
        },
        {
            "kind": 120,
            "expression": {
                "kind": 134299649,
                "text": "x",
                "rawText": "x",
                "flags": 96,
                "transformFlags": 0,
                "start": 30,
                "end": 32
            },
            "flags": 16,
            "transformFlags": 4096,
            "start": 30,
            "end": 32
        }
    ],
    "isModule": false,
    "source": "async () => {  c\\u006fntinue = x  }",
    "fileName": "__root__",
    "flags": 0,
    "transformFlags": 0,
    "start": 0,
    "end": 35
}
```

### Printed

```javascript

```

### Diagnostics

```javascript
✖ A 'continue' statement can only be used within an enclosing iteration statement. - start: 13, end: 28
✖ Keywords cannot contain escape characters - start: 13, end: 28
✖ Identifier expected - start: 28, end: 30
✖ A 'continue' statement can only jump to a label of an enclosing iteration statement. - start: 13, end: 30
✖ Declaration or statement expected - start: 32, end: 35

```

