# Kataw parser test case

## Input

`````js
let x = () => --
a;
`````

## Output

### CST

```javascript
{
    "kind": 122,
    "directives": [],
    "statements": [
        {
            "kind": 162,
            "lexicalKeyword": {
                "kind": 41951307,
                "flags": 80,
                "start": 0,
                "end": 3
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
                            "start": 3,
                            "end": 5
                        },
                        "optionalToken": null,
                        "type": null,
                        "initializer": {
                            "kind": 271,
                            "arrowToken": {
                                "kind": 10,
                                "flags": 0,
                                "start": 10,
                                "end": 13
                            },
                            "typeParameters": null,
                            "parameters": [],
                            "asyncKeyword": null,
                            "returnType": null,
                            "contents": {
                                "kind": 128,
                                "operandToken": {
                                    "kind": 196636,
                                    "flags": 64,
                                    "start": 13,
                                    "end": 16
                                },
                                "operand": {
                                    "kind": 134299649,
                                    "text": "a",
                                    "rawText": "a",
                                    "flags": 96,
                                    "start": 16,
                                    "end": 18
                                },
                                "flags": 32,
                                "start": 13,
                                "end": 18
                            },
                            "flags": 32,
                            "start": 7,
                            "end": 18
                        },
                        "flags": 16,
                        "start": 3,
                        "end": 18
                    }
                ],
                "flags": 33554448,
                "start": 3,
                "end": 18
            },
            "flags": 33554448,
            "start": 0,
            "end": 19
        }
    ],
    "isModule": false,
    "source": "let x = () => --\na;",
    "fileName": "__root__",
    "flags": 0,
    "start": 0,
    "end": 19
}
```

### Printed

```javascript

let x =  () => a;
```

### Diagnostics

```javascript
✔ No errors
```

