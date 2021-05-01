# Kataw parser test case

## Input

`````js
let f = async
 (g) => g
`````

## Output

### Hybrid CST

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
                            "text": "f",
                            "rawText": " f",
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
                                "start": 18,
                                "end": 21
                            },
                            "typeParameters": null,
                            "parameters": [
                                {
                                    "kind": 134299649,
                                    "text": "g",
                                    "rawText": "g",
                                    "flags": 96,
                                    "start": 16,
                                    "end": 17
                                }
                            ],
                            "asyncToken": {
                                "kind": 82031,
                                "flags": 64,
                                "start": 7,
                                "end": 13
                            },
                            "returnType": null,
                            "contents": {
                                "kind": 134299649,
                                "text": "g",
                                "rawText": " g",
                                "flags": 96,
                                "start": 21,
                                "end": 23
                            },
                            "flags": 288,
                            "start": 7,
                            "end": 23
                        },
                        "flags": 16,
                        "start": 3,
                        "end": 23
                    }
                ],
                "flags": 33554448,
                "start": 3,
                "end": 23
            },
            "flags": 33554448,
            "start": 0,
            "end": 23
        }
    ],
    "isModule": false,
    "source": "let f = async\n (g) => g",
    "fileName": "__root__",
    "flags": 0,
    "start": 0,
    "end": 23
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

