# Auto-generated test cases ( Kataw )
- Regenerated: 2021-06-14
- From: kataw/test/__snapshot__/parser/expressions/arrow/type-annotation/autogen.md
- Path: kataw/test/__snapshot__/parser/expressions/arrow/type-annotation/gen/strict_directive
> :: test: strict directive
> :: case: (a: string):number =>  {};
## Options

`````js
{}
`````
## Input

`````js
"use strict"; (a: string):number =>  {};
`````
## Output

### CST

```javascript
{
    "kind": 122,
    "directives": [
        {
            "kind": 201392131,
            "text": "use strict",
            "rawText": "\"use strict\"",
            "flags": 96,
            "start": 0,
            "end": 12
        }
    ],
    "statements": [
        {
            "kind": 120,
            "expression": {
                "kind": 121,
                "expression": {
                    "kind": 132,
                    "expressions": [],
                    "flags": 32,
                    "start": 13,
                    "end": 16
                },
                "flags": 32,
                "start": 13,
                "end": 16
            },
            "flags": 16,
            "start": 13,
            "end": 16
        },
        {
            "kind": 120,
            "expression": {
                "kind": 134299649,
                "text": "string",
                "rawText": "string",
                "flags": 96,
                "start": 17,
                "end": 24
            },
            "flags": 16,
            "start": 17,
            "end": 24
        },
        {
            "kind": 120,
            "expression": {
                "kind": 271,
                "arrowToken": {
                    "kind": 10,
                    "flags": 64,
                    "start": 32,
                    "end": 35
                },
                "typeParameters": null,
                "parameters": {
                    "kind": 134299649,
                    "text": "number",
                    "rawText": "number",
                    "flags": 96,
                    "start": 26,
                    "end": 32
                },
                "asyncKeyword": null,
                "returnType": null,
                "contents": {
                    "kind": 216,
                    "functionStatementList": {
                        "kind": 217,
                        "directives": [],
                        "statements": [],
                        "flags": 32,
                        "start": 38,
                        "end": 38
                    },
                    "flags": 32,
                    "start": 35,
                    "end": 39
                },
                "flags": 32,
                "start": 26,
                "end": 39
            },
            "flags": 16,
            "start": 26,
            "end": 40
        }
    ],
    "isModule": false,
    "source": "\"use strict\"; (a: string):number =>  {};",
    "fileName": "__root__",
    "flags": 0,
    "start": 0,
    "end": 40
}
```

### Printed

```javascript

```

### Diagnostics

```javascript
✖ Expected a ')' to match the '(' token here - start: 16, end: 17
✖ Expected a `;` - start: 24, end: 25
✖ Declaration or statement expected - start: 25, end: 26

```

