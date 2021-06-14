# Kataw parser test case

## Input

`````js
async function f() {
  const a: await = 1; // not an error because parsing a type annotation exits the Await context
}
`````

## Options

`````js
{ allowTypes : true }
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
            "generatorToken": null,
            "name": {
                "kind": 134299649,
                "text": "f",
                "rawText": "f",
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
                            "kind": 162,
                            "lexicalKeyword": {
                                "kind": 37757004,
                                "flags": 81,
                                "start": 20,
                                "end": 28
                            },
                            "binding": {
                                "kind": 151,
                                "bindingList": [
                                    {
                                        "kind": 190,
                                        "binding": {
                                            "kind": 134299649,
                                            "text": "a",
                                            "rawText": "a",
                                            "flags": 96,
                                            "start": 28,
                                            "end": 30
                                        },
                                        "optionalToken": null,
                                        "type": {
                                            "kind": 139,
                                            "bitwiseOrToken": null,
                                            "bitwiseAndToken": null,
                                            "type": {
                                                "kind": 144,
                                                "id": {
                                                    "kind": 134299649,
                                                    "text": "await",
                                                    "rawText": "await",
                                                    "flags": 96,
                                                    "start": 31,
                                                    "end": 37
                                                },
                                                "typeParameters": null,
                                                "flags": 2097152,
                                                "start": 31,
                                                "end": 37
                                            },
                                            "flags": 2097152,
                                            "start": 31,
                                            "end": 37
                                        },
                                        "initializer": {
                                            "kind": 201392130,
                                            "text": 1,
                                            "rawText": "1",
                                            "flags": 96,
                                            "start": 39,
                                            "end": 41
                                        },
                                        "flags": 16,
                                        "start": 28,
                                        "end": 41
                                    }
                                ],
                                "flags": 16777232,
                                "start": 28,
                                "end": 41
                            },
                            "flags": 33554448,
                            "start": 20,
                            "end": 42
                        }
                    ],
                    "flags": 33,
                    "start": 20,
                    "end": 42
                },
                "flags": 32,
                "start": 18,
                "end": 118
            },
            "typeParameters": null,
            "returnType": null,
            "flags": 144,
            "start": 0,
            "end": 118
        }
    ],
    "isModule": false,
    "source": "async function f() {\n  const a: await = 1; // not an error because parsing a type annotation exits the Await context\n}",
    "fileName": "__root__",
    "flags": 0,
    "start": 0,
    "end": 118
}
```

### Printed

```javascript

async function f() {
  const a:  = 1; // not an error because parsing a type annotation exits the Await context

}
```

### Diagnostics

```javascript
✔ No errors
```

