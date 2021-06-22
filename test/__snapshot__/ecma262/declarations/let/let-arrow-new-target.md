# Kataw parser test case

## Input

`````js
let y = () => new.target
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
                            "text": "y",
                            "rawText": "y",
                            "flags": 96,
                            "start": 3,
                            "end": 5
                        },
                        "type": null,
                        "initializer": {
                            "kind": 271,
                            "asyncKeyword": null,
                            "typeParameters": null,
                            "parameters": [],
                            "returnType": null,
                            "arrowToken": {
                                "kind": 10,
                                "flags": 64,
                                "start": 10,
                                "end": 13
                            },
                            "contents": {
                                "kind": 211,
                                "newKeyword": {
                                    "kind": 138477661,
                                    "flags": 96,
                                    "start": 13,
                                    "end": 17
                                },
                                "targetIdentifier": {
                                    "kind": 16594,
                                    "flags": 96,
                                    "start": 18,
                                    "end": 24
                                },
                                "flags": 96,
                                "start": 13,
                                "end": 24
                            },
                            "flags": 32,
                            "start": 7,
                            "end": 24
                        },
                        "flags": 16,
                        "start": 3,
                        "end": 24
                    }
                ],
                "flags": 16,
                "start": 3,
                "end": 24
            },
            "flags": 33554448,
            "start": 0,
            "end": 24
        }
    ],
    "isModule": false,
    "source": "let y = () => new.target",
    "fileName": "__root__",
    "flags": 0,
    "start": 0,
    "end": 24
}
```

### Printed

```javascript

```

### Diagnostics

```javascript
✖ 'new.target' only allowed within functions - start: 13, end: 24

```

