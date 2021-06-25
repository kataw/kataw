# Kataw parser test case

## Input

`````js
async function f() {
  for await (;false;);
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
                "flags": 64,
                "start": 5,
                "end": 14
            },
            "asteriskToken": null,
            "name": {
                "kind": 134299649,
                "text": "f",
                "rawText": "f",
                "flags": 96,
                "start": 14,
                "end": 16
            },
            "typeParameters": null,
            "formalParameterList": {
                "kind": 214,
                "formalParameters": [],
                "trailingComma": false,
                "flags": 32,
                "start": 17,
                "end": 17
            },
            "contents": {
                "kind": 216,
                "functionStatementList": {
                    "kind": 217,
                    "directives": [],
                    "statements": [
                        {
                            "kind": 165,
                            "forKeyword": {
                                "kind": 37757017,
                                "flags": 81,
                                "start": 20,
                                "end": 26
                            },
                            "initializer": null,
                            "condition": null,
                            "incrementor": {
                                "kind": 205586437,
                                "flags": 96,
                                "start": 35,
                                "end": 40
                            },
                            "statement": {
                                "kind": 168,
                                "flags": 16,
                                "start": 42,
                                "end": 43
                            },
                            "flags": 81,
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
                "end": 45
            },
            "returnType": null,
            "flags": 144,
            "start": 0,
            "end": 45
        }
    ],
    "isModule": false,
    "source": "async function f() {\n  for await (;false;);\n}",
    "fileName": "__root__",
    "flags": 0,
    "start": 0,
    "end": 45
}
```

### Printed

```javascript

```

### Diagnostics

```javascript
✖ 'of' expected - start: 34, end: 35

```

