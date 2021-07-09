# Kataw parser test case

## Input

`````js
let f = async
 (g = await foo) => g
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
                                        "kind": 281,
                                        "ellipsisToken": null,
                                        "left": {
                                            "kind": 134299649,
                                            "text": "g",
                                            "rawText": "g",
                                            "flags": 96,
                                            "transformFlags": 0,
                                            "start": 16,
                                            "end": 17
                                        },
                                        "optionalToken": null,
                                        "type": null,
                                        "right": {
                                            "kind": 134299649,
                                            "text": "await",
                                            "rawText": "await",
                                            "flags": 96,
                                            "transformFlags": 0,
                                            "start": 19,
                                            "end": 25
                                        },
                                        "flags": 32,
                                        "transformFlags": 4096,
                                        "start": 16,
                                        "end": 25
                                    },
                                    {
                                        "kind": 134299649,
                                        "text": "foo",
                                        "rawText": "foo",
                                        "flags": 96,
                                        "transformFlags": 0,
                                        "start": 25,
                                        "end": 29
                                    }
                                ],
                                "trailingComma": false,
                                "flags": 35,
                                "transformFlags": 0,
                                "start": 16,
                                "end": 30
                            },
                            "returnType": null,
                            "arrowToken": {
                                "kind": 10,
                                "flags": 64,
                                "transformFlags": 0,
                                "start": 30,
                                "end": 33
                            },
                            "contents": {
                                "kind": 134299649,
                                "text": "g",
                                "rawText": "g",
                                "flags": 96,
                                "transformFlags": 0,
                                "start": 33,
                                "end": 35
                            },
                            "flags": 291,
                            "transformFlags": 0,
                            "start": 7,
                            "end": 35
                        },
                        "flags": 16,
                        "transformFlags": 4224,
                        "start": 3,
                        "end": 35
                    }
                ],
                "flags": 16,
                "transformFlags": 0,
                "start": 3,
                "end": 35
            },
            "flags": 33554448,
            "transformFlags": 0,
            "start": 0,
            "end": 35
        }
    ],
    "isModule": false,
    "source": "let f = async\n (g = await foo) => g",
    "fileName": "__root__",
    "flags": 0,
    "transformFlags": 0,
    "start": 0,
    "end": 35
}
```

### Printed

```javascript

```

### Diagnostics

```javascript
✖ Line terminator not permitted before arrow - start: 30, end: 33

```

