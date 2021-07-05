# Auto-generated test cases ( Kataw )
- From: kataw/test/__snapshot__/ecma262/expressions/assignment/keyword_with_escapes_check/autogen.md
- Path: kataw/test/__snapshot__/ecma262/expressions/assignment/keyword_with_escapes_check/gen/inside_an_async_func
> :: test: inside an async func
> :: case: p\u0072otected
## Options

`````js
{}
`````
## Input

`````js
async () => {  p\u0072otected = x  }
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
                "start": 0,
                "end": 5
            },
            "typeParameters": null,
            "arrowPatameterList": {
                "kind": 342,
                "parameters": [],
                "trailingComma": false,
                "flags": 32,
                "start": 7,
                "end": 7
            },
            "returnType": null,
            "arrowToken": {
                "kind": 10,
                "flags": 64,
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
                            "kind": 120,
                            "expression": {
                                "kind": 125,
                                "left": {
                                    "kind": 134299649,
                                    "text": "protected",
                                    "rawText": "p\\u0072otected",
                                    "flags": 16480,
                                    "start": 13,
                                    "end": 29
                                },
                                "operatorToken": {
                                    "kind": 4125,
                                    "flags": 96,
                                    "start": 29,
                                    "end": 31
                                },
                                "right": {
                                    "kind": 134299649,
                                    "text": "x",
                                    "rawText": "x",
                                    "flags": 96,
                                    "start": 31,
                                    "end": 33
                                },
                                "flags": 0,
                                "start": 13,
                                "end": 33
                            },
                            "flags": 16,
                            "start": 13,
                            "end": 33
                        }
                    ],
                    "flags": 16416,
                    "start": 13,
                    "end": 33
                },
                "flags": 32,
                "start": 11,
                "end": 36
            },
            "flags": 288,
            "start": 0,
            "end": 36
        }
    ],
    "isModule": false,
    "source": "async () => {  p\\u0072otected = x  }",
    "fileName": "__root__",
    "flags": 0,
    "start": 0,
    "end": 36
}
```

### Printed

```javascript

async () => {
  p\u0072otected = x;
}
```

### Diagnostics

```javascript
✔ No errors
```

