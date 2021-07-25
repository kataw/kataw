# Auto-generated test cases ( Kataw )
- From: kataw/test/__snapshot__/ecma262/expressions/arrow/type-annotation/autogen.md
- Path: kataw/test/__snapshot__/ecma262/expressions/arrow/type-annotation/gen/stand_alone
> :: test: stand alone
> :: case: (a: string):number =>  {};
## Options

`````js
{}
`````
## Input

`````js
(a: string):number =>  {};
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
                "kind": 121,
                "expression": {
                    "kind": 132,
                    "expressions": [],
                    "flags": 32,
                    "transformFlags": 1024,
                    "start": 0,
                    "end": 2
                },
                "flags": 32,
                "transformFlags": 0,
                "start": 0,
                "end": 2
            },
            "flags": 16,
            "transformFlags": 4096,
            "start": 0,
            "end": 2
        },
        {
            "kind": 120,
            "expression": {
                "kind": 134299649,
                "text": "string",
                "rawText": "string",
                "flags": 96,
                "transformFlags": 0,
                "start": 3,
                "end": 10
            },
            "flags": 16,
            "transformFlags": 4096,
            "start": 3,
            "end": 10
        },
        {
            "kind": 120,
            "expression": {
                "kind": 271,
                "asyncKeyword": null,
                "typeParameters": null,
                "arrowPatameterList": {
                    "kind": 134299649,
                    "text": "number",
                    "rawText": "number",
                    "flags": 96,
                    "transformFlags": 0,
                    "start": 12,
                    "end": 18
                },
                "returnType": null,
                "arrowToken": {
                    "kind": 10,
                    "flags": 64,
                    "transformFlags": 0,
                    "start": 18,
                    "end": 21
                },
                "contents": {
                    "kind": 216,
                    "functionStatementList": {
                        "kind": 217,
                        "directives": [],
                        "statements": [],
                        "flags": 32,
                        "transformFlags": 0,
                        "start": 24,
                        "end": 24
                    },
                    "flags": 32,
                    "transformFlags": 0,
                    "start": 21,
                    "end": 25
                },
                "flags": 32,
                "transformFlags": 0,
                "start": 12,
                "end": 25
            },
            "flags": 16,
            "transformFlags": 4096,
            "start": 12,
            "end": 26
        }
    ],
    "isModule": false,
    "source": "(a: string):number =>  {};",
    "fileName": "__root__",
    "flags": 0,
    "transformFlags": 0,
    "start": 0,
    "end": 26
}
```

### Printed

```javascript

```

### Diagnostics

```javascript
✖ Expected a ')' to match the '(' token here - start: 2, end: 3
✖ ')' is not allowed here. Did you mean ';'? - start: 10, end: 11
✖ Declaration or statement expected - start: 11, end: 12

```

