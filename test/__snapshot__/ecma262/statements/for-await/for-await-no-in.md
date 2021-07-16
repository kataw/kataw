# Kataw parser test case

## Input

`````js
async function f() {
  for await (let x in y);
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
                "transformFlags": 0,
                "start": 0,
                "end": 5
            },
            "functionKeyword": {
                "kind": 37822554,
                "flags": 64,
                "transformFlags": 0,
                "start": 5,
                "end": 14
            },
            "asteriskToken": null,
            "name": {
                "kind": 134299649,
                "text": "f",
                "rawText": "f",
                "flags": 96,
                "transformFlags": 0,
                "start": 14,
                "end": 16
            },
            "typeParameters": null,
            "formalParameterList": {
                "kind": 214,
                "formalParameters": [],
                "trailingComma": false,
                "flags": 32,
                "transformFlags": 0,
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
                            "kind": 166,
                            "forKeyword": {
                                "kind": 37757017,
                                "flags": 81,
                                "transformFlags": 0,
                                "start": 20,
                                "end": 26
                            },
                            "initializer": {
                                "kind": 162,
                                "lexicalKeyword": {
                                    "kind": 41951307,
                                    "flags": 64,
                                    "transformFlags": 0,
                                    "start": 20,
                                    "end": 37
                                },
                                "binding": {
                                    "kind": 151,
                                    "bindingList": [
                                        {
                                            "kind": 190,
                                            "binding": {
                                                "kind": 134299649,
                                                "text": "x",
                                                "rawText": "x",
                                                "flags": 96,
                                                "transformFlags": 0,
                                                "start": 37,
                                                "end": 39
                                            },
                                            "type": null,
                                            "initializer": null,
                                            "flags": 16,
                                            "transformFlags": 4224,
                                            "start": 37,
                                            "end": 39
                                        }
                                    ],
                                    "flags": 16,
                                    "transformFlags": 0,
                                    "start": 37,
                                    "end": 39
                                },
                                "flags": 33554448,
                                "transformFlags": 0,
                                "start": 20,
                                "end": 39
                            },
                            "inKeyword": {
                                "kind": 21006388,
                                "flags": 64,
                                "transformFlags": 8192,
                                "start": 39,
                                "end": 42
                            },
                            "expression": {
                                "kind": 134299649,
                                "text": "y",
                                "rawText": "y",
                                "flags": 96,
                                "transformFlags": 0,
                                "start": 42,
                                "end": 44
                            },
                            "statement": {
                                "kind": 168,
                                "flags": 16,
                                "transformFlags": 0,
                                "start": 45,
                                "end": 46
                            },
                            "flags": 81,
                            "transformFlags": 0,
                            "start": 20,
                            "end": 46
                        }
                    ],
                    "flags": 33,
                    "transformFlags": 0,
                    "start": 20,
                    "end": 46
                },
                "flags": 32,
                "transformFlags": 0,
                "start": 18,
                "end": 48
            },
            "returnType": null,
            "flags": 144,
            "transformFlags": 0,
            "start": 0,
            "end": 48
        }
    ],
    "isModule": false,
    "source": "async function f() {\n  for await (let x in y);\n}",
    "fileName": "__root__",
    "flags": 0,
    "transformFlags": 0,
    "start": 0,
    "end": 48
}
```

### Printed

```javascript
async function f() {
  for (let x in y);
}
```

### Diagnostics

```javascript
✔ No errors
```

