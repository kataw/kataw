# Kataw parser test case

## Options

`````js
{ jsx: false, disableWebCompat: true, module: true }
`````

## Input

`````js
foo(function* f(){})
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
                            "asyncKeyword": null,
                            "functionKeyword": {
                                "kind": 37822554,
                                "flags": 0,
                                "start": 4,
                                "end": 12
                            },
                            "generatorToken": {
                                "kind": 67143222,
                                "flags": 64,
                                "start": 12,
                                "end": 13
                            },
                            "name": {
                                "kind": 134299649,
                                "text": "f",
                                "rawText": " f",
                                "flags": 96,
                                "start": 13,
                                "end": 15
                            },
                            "formalParameters": {
                                "kind": 214,
                                "formalParameterList": [],
                                "trailingComma": false,
                                "flags": 32,
                                "start": 15,
                                "end": 17
                            },
                            "contents": {
                                "kind": 216,
                                "functionStatementList": {
                                    "kind": 217,
                                    "directives": [],
                                    "statements": [],
                                    "flags": 32,
                                    "start": 18,
                                    "end": 18
                                },
                                "flags": 32,
                                "start": 17,
                                "end": 19
                            },
                            "typeParameters": null,
                            "returnType": null,
                            "flags": 288,
                            "start": 4,
                            "end": 19
                        }
                    ],
                    "trailingComma": false,
                    "flags": 32,
                    "start": 4,
                    "end": 19
                },
                "flags": 32,
                "start": 0,
                "end": 20
            },
            "flags": 16,
            "start": 0,
            "end": 20
        }
    ],
    "isModule": true,
    "source": "foo(function* f(){})",
    "fileName": "__root__",
    "flags": 0,
    "start": 0,
    "end": 20
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

