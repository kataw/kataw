# Kataw parser test case

## Options

`````js
{ jsx: false, disableWebCompat: true, module: true }
`````

## Input

`````js
foo(async function f(){})
`````

## Output

### Hybrid CST

```javascript
{
    "kind": 122,
    "directives": [],
    "statements": [
        {
            "kind": 120,
            "expression": {
                "kind": 131,
                "expression": {
                    "kind": 134299649,
                    "original": "foo",
                    "text": "foo",
                    "rawText": "foo",
                    "flags": 96,
                    "start": 0,
                    "end": 3
                },
                "argumentList": {
                    "kind": 256,
                    "elements": [
                        {
                            "kind": 177,
                            "asyncKeyword": {
                                "kind": 82031,
                                "flags": 64,
                                "start": 4,
                                "end": 9
                            },
                            "functionKeyword": {
                                "kind": 37822554,
                                "flags": 0,
                                "start": 9,
                                "end": 18
                            },
                            "generatorToken": null,
                            "name": {
                                "kind": 134299649,
                                "original": "f",
                                "text": "f",
                                "rawText": " f",
                                "flags": 96,
                                "start": 18,
                                "end": 20
                            },
                            "formalParameters": {
                                "kind": 214,
                                "formalParameterList": [],
                                "trailingComma": false,
                                "flags": 32,
                                "start": 20,
                                "end": 22
                            },
                            "contents": {
                                "kind": 216,
                                "functionStatementList": {
                                    "kind": 217,
                                    "directives": [],
                                    "statements": [],
                                    "flags": 32,
                                    "start": 23,
                                    "end": 23
                                },
                                "flags": 32,
                                "start": 22,
                                "end": 24
                            },
                            "typeParameters": null,
                            "returnType": null,
                            "flags": 160,
                            "start": 4,
                            "end": 24
                        }
                    ],
                    "trailingComma": false,
                    "flags": 32,
                    "start": 4,
                    "end": 24
                },
                "flags": 32,
                "start": 0,
                "end": 25
            },
            "flags": 16,
            "start": 0,
            "end": 25
        }
    ],
    "isModule": true,
    "source": "foo(async function f(){})",
    "fileName": "__root__",
    "flags": 0,
    "start": 0,
    "end": 25
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

