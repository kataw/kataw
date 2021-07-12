# Kataw parser test case

## Input

`````js
async function f() {
  for await (let i = 0;false;);
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
                            "initializer": {
                                "kind": 162,
                                "lexicalKeyword": {
                                    "kind": 41951307,
                                    "flags": 64,
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
                                                "text": "i",
                                                "rawText": "i",
                                                "flags": 96,
                                                "start": 37,
                                                "end": 39
                                            },
                                            "type": null,
                                            "initializer": {
                                                "kind": 201392130,
                                                "text": 0,
                                                "rawText": "0",
                                                "flags": 96,
                                                "start": 41,
                                                "end": 43
                                            },
                                            "flags": 16,
                                            "start": 37,
                                            "end": 43
                                        }
                                    ],
                                    "flags": 16,
                                    "start": 37,
                                    "end": 43
                                },
                                "flags": 33554448,
                                "start": 20,
                                "end": 43
                            },
                            "condition": null,
                            "incrementor": {
                                "kind": 205586437,
                                "flags": 96,
                                "start": 44,
                                "end": 49
                            },
                            "statement": {
                                "kind": 168,
                                "flags": 16,
                                "start": 51,
                                "end": 52
                            },
                            "flags": 81,
                            "start": 20,
                            "end": 52
                        }
                    ],
                    "flags": 33,
                    "start": 20,
                    "end": 52
                },
                "flags": 32,
                "start": 18,
                "end": 54
            },
            "returnType": null,
            "flags": 144,
            "start": 0,
            "end": 54
        }
    ],
    "isModule": false,
    "source": "async function f() {\n  for await (let i = 0;false;);\n}",
    "fileName": "__root__",
    "flags": 0,
    "start": 0,
    "end": 54
}
```

### Printed

```javascript

  async function f() {
    for (let i = 0;; false)
      ;
  }

```

### Diagnostics

```javascript
✔ No errors
```

