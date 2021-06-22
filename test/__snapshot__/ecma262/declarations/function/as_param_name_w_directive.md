# Kataw parser test case

## Input

`````js
function d(public){ "use strict"; }
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
                "text": "d",
                "rawText": "d",
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
                        "text": "public",
                        "rawText": "public",
                        "flags": 96,
                        "start": 11,
                        "end": 17
                    }
                ],
                "trailingComma": false,
                "flags": 32,
                "start": 10,
                "end": 18
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
                            "start": 19,
                            "end": 32
                        }
                    ],
                    "statements": [],
                    "flags": 32,
                    "start": 19,
                    "end": 33
                },
                "flags": 32,
                "start": 18,
                "end": 35
            },
            "returnType": null,
            "flags": 16,
            "start": 0,
            "end": 35
        }
    ],
    "isModule": false,
    "source": "function d(public){ \"use strict\"; }",
    "fileName": "__root__",
    "flags": 0,
    "start": 0,
    "end": 35
}
```

### Printed

```javascript

function d() {}
```

### Diagnostics

```javascript
✔ No errors
```

