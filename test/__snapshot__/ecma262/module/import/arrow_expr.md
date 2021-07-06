# Kataw parser test case

## Options

`````js
{ jsx: true, disableWebCompat: true, module: true }
`````

## Input

`````js
let x = () => import {x} from "y"
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
                            "text": "x",
                            "rawText": "x",
                            "flags": 96,
                            "transformFlags": 0,
                            "start": 3,
                            "end": 5
                        },
                        "type": null,
                        "initializer": {
                            "kind": 271,
                            "asyncKeyword": null,
                            "typeParameters": null,
                            "arrowPatameterList": {
                                "kind": 342,
                                "parameters": [],
                                "trailingComma": false,
                                "flags": 32,
                                "transformFlags": 0,
                                "start": 9,
                                "end": 9
                            },
                            "returnType": null,
                            "arrowToken": {
                                "kind": 10,
                                "flags": 64,
                                "transformFlags": 0,
                                "start": 10,
                                "end": 13
                            },
                            "contents": {
                                "kind": 206,
                                "importKeyword": {
                                    "kind": 37814364,
                                    "flags": 64,
                                    "transformFlags": 0,
                                    "start": 13,
                                    "end": 20
                                },
                                "expression": {
                                    "kind": 134299649,
                                    "text": "x",
                                    "rawText": "x",
                                    "flags": 96,
                                    "transformFlags": 0,
                                    "start": 22,
                                    "end": 23
                                },
                                "flags": 32,
                                "transformFlags": 0,
                                "start": 20,
                                "end": 23
                            },
                            "flags": 32,
                            "transformFlags": 0,
                            "start": 7,
                            "end": 23
                        },
                        "flags": 16,
                        "transformFlags": 128,
                        "start": 3,
                        "end": 23
                    }
                ],
                "flags": 16,
                "transformFlags": 0,
                "start": 3,
                "end": 23
            },
            "flags": 33554448,
            "transformFlags": 0,
            "start": 0,
            "end": 23
        },
        {
            "kind": 120,
            "expression": {
                "kind": 134299649,
                "text": "from",
                "rawText": "from",
                "flags": 96,
                "transformFlags": 0,
                "start": 24,
                "end": 29
            },
            "flags": 16,
            "transformFlags": 0,
            "start": 24,
            "end": 29
        },
        {
            "kind": 120,
            "expression": {
                "kind": 201392131,
                "text": "y",
                "rawText": "\"y\"",
                "flags": 96,
                "transformFlags": 0,
                "start": 29,
                "end": 33
            },
            "flags": 16,
            "transformFlags": 0,
            "start": 29,
            "end": 33
        }
    ],
    "isModule": true,
    "source": "let x = () => import {x} from \"y\"",
    "fileName": "__root__",
    "flags": 0,
    "transformFlags": 0,
    "start": 0,
    "end": 33
}
```

### Printed

```javascript

```

### Diagnostics

```javascript
✖ Expected a ')' to match the '(' token here - start: 23, end: 24
✖ Expected a `;` - start: 29, end: 33

```

