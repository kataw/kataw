# Kataw parser test case

## Input

`````js
let y = () => new.target
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
                            "text": "y",
                            "rawText": "y",
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
                            "asyncToken": null,
                            "returnType": null,
                            "contents": {
                                "kind": 211,
                                "targetKeyword": {
                                    "kind": 16594,
                                    "flags": 0,
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
                "flags": 33554448,
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
✖ Soon to be open sourced
```

### Diagnostics

```javascript
✖ 'new.target' only allowed within functions - start: 24, end: 24

```

