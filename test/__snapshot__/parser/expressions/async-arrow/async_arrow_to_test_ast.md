# Kataw parser test case

## Input

`````js
let f = a + b + async()=>d
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
                            "text": "f",
                            "rawText": "f",
                            "flags": 96,
                            "start": 3,
                            "end": 5
                        },
                        "optionalToken": null,
                        "type": null,
                        "initializer": {
                            "kind": 198,
                            "left": {
                                "kind": 198,
                                "left": {
                                    "kind": 134299649,
                                    "text": "a",
                                    "rawText": "a",
                                    "flags": 96,
                                    "start": 7,
                                    "end": 9
                                },
                                "operatorToken": {
                                    "kind": 34098,
                                    "flags": 64,
                                    "start": 9,
                                    "end": 11
                                },
                                "right": {
                                    "kind": 134299649,
                                    "text": "b",
                                    "rawText": "b",
                                    "flags": 96,
                                    "start": 11,
                                    "end": 13
                                },
                                "flags": 32,
                                "start": 7,
                                "end": 13
                            },
                            "operatorToken": {
                                "kind": 34098,
                                "flags": 64,
                                "start": 13,
                                "end": 15
                            },
                            "right": {
                                "kind": 271,
                                "arrowToken": {
                                    "kind": 10,
                                    "flags": 0,
                                    "start": 23,
                                    "end": 25
                                },
                                "typeParameters": null,
                                "parameters": [],
                                "asyncToken": {
                                    "kind": 82031,
                                    "flags": 64,
                                    "start": 15,
                                    "end": 21
                                },
                                "returnType": null,
                                "contents": {
                                    "kind": 134299649,
                                    "text": "d",
                                    "rawText": "d",
                                    "flags": 96,
                                    "start": 25,
                                    "end": 26
                                },
                                "flags": 288,
                                "start": 15,
                                "end": 26
                            },
                            "flags": 32,
                            "start": 7,
                            "end": 26
                        },
                        "flags": 16,
                        "start": 3,
                        "end": 26
                    }
                ],
                "flags": 33554448,
                "start": 3,
                "end": 26
            },
            "flags": 33554448,
            "start": 0,
            "end": 26
        }
    ],
    "isModule": false,
    "source": "let f = a + b + async()=>d",
    "fileName": "__root__",
    "flags": 0,
    "start": 0,
    "end": 26
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

