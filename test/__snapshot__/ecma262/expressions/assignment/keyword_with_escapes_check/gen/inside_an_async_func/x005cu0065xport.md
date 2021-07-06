# Auto-generated test cases ( Kataw )
- From: kataw/test/__snapshot__/ecma262/expressions/assignment/keyword_with_escapes_check/autogen.md
- Path: kataw/test/__snapshot__/ecma262/expressions/assignment/keyword_with_escapes_check/gen/inside_an_async_func
> :: test: inside an async func
> :: case: \u0065xport
## Options

`````js
{}
`````
## Input

`````js
async () => {  \u0065xport = x  }
`````
## Output

### CST

```javascript
{
    "kind": 122,
    "directives": [],
    "statements": [
        {
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
                            "kind": 257,
                            "exportKeyword": {
                                "kind": 4202582,
                                "flags": 16464,
                                "transformFlags": 0,
                                "start": 13,
                                "end": 26
                            },
                            "declaration": null,
                            "namedExports": null,
                            "exportFromClause": null,
                            "fromClause": null,
                            "exportKind": 0,
                            "flags": 80,
                            "transformFlags": 0,
                            "start": 13,
                            "end": 26
                        }
                    ],
                    "flags": 16416,
                    "transformFlags": 0,
                    "start": 13,
                    "end": 26
                },
                "flags": 32,
                "transformFlags": 0,
                "start": 11,
                "end": 26
            },
            "flags": 288,
            "transformFlags": 0,
            "start": 0,
            "end": 26
        },
        {
            "kind": 120,
            "expression": {
                "kind": 134299649,
                "text": "x",
                "rawText": "x",
                "flags": 96,
                "transformFlags": 0,
                "start": 28,
                "end": 30
            },
            "flags": 16,
            "transformFlags": 0,
            "start": 28,
            "end": 30
        }
    ],
    "isModule": false,
    "source": "async () => {  \\u0065xport = x  }",
    "fileName": "__root__",
    "flags": 0,
    "transformFlags": 0,
    "start": 0,
    "end": 33
}
```

### Printed

```javascript

```

### Diagnostics

```javascript
✖ The `export` keyword can only be used with the module goal - start: 13, end: 26
✖ Keywords cannot contain escape characters - start: 13, end: 26
✖ Declaration or statement expected - start: 26, end: 28
✖ Declaration or statement expected - start: 30, end: 33

```

