# Kataw parser test case

## Input

`````js
function f(x, y){"use strict";}
`````

## Output

### CST

```javascript
{
    "kind": 122,
    "directives": [],
    "statements": [
        {
            "kind": 176,
            "declareKeyword": null,
            "asyncKeyword": null,
            "functionKeyword": {
                "kind": 37822554,
                "flags": 64,
                "start": 0,
                "end": 8
            },
            "asteriskToken": null,
            "name": {
                "kind": 134299649,
                "text": "f",
                "rawText": "f",
                "flags": 96,
                "start": 8,
                "end": 10
            },
            "typeParameters": null,
            "formalParameterList": {
                "kind": 214,
                "formalParameters": [
                    {
                        "kind": 134299649,
                        "text": "x",
                        "rawText": "x",
                        "flags": 96,
                        "start": 11,
                        "end": 12
                    },
                    {
                        "kind": 134299649,
                        "text": "y",
                        "rawText": "y",
                        "flags": 96,
                        "start": 13,
                        "end": 15
                    }
                ],
                "trailingComma": false,
                "flags": 32,
                "start": 11,
                "end": 15
            },
            "contents": {
                "kind": 216,
                "functionStatementList": {
                    "kind": 217,
                    "directives": [
                        {
                            "kind": 201392131,
                            "text": "use strict",
                            "rawText": "\"use strict\"",
                            "flags": 96,
                            "start": 17,
                            "end": 29
                        }
                    ],
                    "statements": [],
                    "flags": 32,
                    "start": 17,
                    "end": 30
                },
                "flags": 32,
                "start": 16,
                "end": 31
            },
            "returnType": null,
            "flags": 16,
            "start": 0,
            "end": 31
        }
    ],
    "isModule": false,
    "source": "function f(x, y){\"use strict\";}",
    "fileName": "__root__",
    "flags": 0,
    "start": 0,
    "end": 31
}
```

### Printed

```javascript

function f(x, y) {}
```

### Diagnostics

```javascript
✔ No errors
```

