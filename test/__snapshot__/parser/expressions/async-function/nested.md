# Kataw parser test case

## Input

`````js
async function x() {

async function x() {}

}
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
            "asyncKeyword": {
                "kind": 82031,
                "flags": 64,
                "start": 0,
                "end": 5
            },
            "functionKeyword": {
                "kind": 37822554,
                "flags": 0,
                "start": 5,
                "end": 14
            },
            "generatorToken": null,
            "name": {
                "kind": 134299649,
                "text": "x",
                "rawText": "x",
                "flags": 96,
                "start": 14,
                "end": 16
            },
            "formalParameters": {
                "kind": 214,
                "formalParameterList": [],
                "trailingComma": false,
                "flags": 32,
                "start": 16,
                "end": 18
            },
            "contents": {
                "kind": 216,
                "functionStatementList": {
                    "kind": 217,
                    "directives": [],
                    "statements": [
                        {
                            "kind": 176,
                            "declareKeyword": null,
                            "asyncKeyword": {
                                "kind": 82031,
                                "flags": 65,
                                "start": 20,
                                "end": 27
                            },
                            "functionKeyword": {
                                "kind": 37822554,
                                "flags": 0,
                                "start": 27,
                                "end": 36
                            },
                            "generatorToken": null,
                            "name": {
                                "kind": 134299649,
                                "text": "x",
                                "rawText": "x",
                                "flags": 96,
                                "start": 36,
                                "end": 38
                            },
                            "formalParameters": {
                                "kind": 214,
                                "formalParameterList": [],
                                "trailingComma": false,
                                "flags": 32,
                                "start": 38,
                                "end": 40
                            },
                            "contents": {
                                "kind": 216,
                                "functionStatementList": {
                                    "kind": 217,
                                    "directives": [],
                                    "statements": [],
                                    "flags": 32,
                                    "start": 42,
                                    "end": 42
                                },
                                "flags": 32,
                                "start": 40,
                                "end": 43
                            },
                            "typeParameters": null,
                            "returnType": null,
                            "flags": 144,
                            "start": 20,
                            "end": 43
                        }
                    ],
                    "flags": 33,
                    "start": 20,
                    "end": 43
                },
                "flags": 32,
                "start": 18,
                "end": 46
            },
            "typeParameters": null,
            "returnType": null,
            "flags": 144,
            "start": 0,
            "end": 46
        }
    ],
    "isModule": false,
    "source": "async function x() {\n\nasync function x() {}\n\n}",
    "fileName": "__root__",
    "flags": 0,
    "start": 0,
    "end": 46
}
```

### Printed

```javascript
✖ Soon to be open sourced
```

### Diagnostics

```javascript
✔ No errors
```

