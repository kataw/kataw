# Kataw parser test case

## Input

`````js
let f = async
(g) => g
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
                "transformFlags": 0,
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
                            "transformFlags": 0,
                            "start": 3,
                            "end": 5
                        },
                        "type": null,
                        "initializer": {
                            "kind": 271,
                            "asyncKeyword": {
                                "kind": 82031,
                                "flags": 64,
                                "transformFlags": 0,
                                "start": 7,
                                "end": 13
                            },
                            "typeParameters": null,
                            "arrowPatameterList": {
                                "kind": 342,
                                "parameters": [
                                    {
                                        "kind": 134299649,
                                        "text": "g",
                                        "rawText": "g",
                                        "flags": 96,
                                        "transformFlags": 0,
                                        "start": 15,
                                        "end": 16
                                    }
                                ],
                                "trailingComma": false,
                                "flags": 33,
                                "transformFlags": 0,
                                "start": 15,
                                "end": 17
                            },
                            "returnType": null,
                            "arrowToken": {
                                "kind": 10,
                                "flags": 64,
                                "transformFlags": 0,
                                "start": 17,
                                "end": 20
                            },
                            "contents": {
                                "kind": 134299649,
                                "text": "g",
                                "rawText": "g",
                                "flags": 96,
                                "transformFlags": 0,
                                "start": 20,
                                "end": 22
                            },
                            "flags": 289,
                            "transformFlags": 0,
                            "start": 7,
                            "end": 22
                        },
                        "flags": 16,
                        "transformFlags": 4224,
                        "start": 3,
                        "end": 22
                    }
                ],
                "flags": 16,
                "transformFlags": 0,
                "start": 3,
                "end": 22
            },
            "flags": 33554448,
            "transformFlags": 0,
            "start": 0,
            "end": 22
        }
    ],
    "isModule": false,
    "source": "let f = async\n(g) => g",
    "fileName": "__root__",
    "flags": 0,
    "transformFlags": 0,
    "start": 0,
    "end": 22
}
```

### Printed

```javascript

```

### Diagnostics

```javascript
✖ Line terminator not permitted before arrow - start: 17, end: 20

```

