# Kataw parser test case

## Options

`````js
{ jsx: true, disableWebCompat: true, module: true }
`````

## Input

`````js
class x { import {x} from "y"; }
`````

## Output

### CST

```javascript
{
    "kind": 122,
    "directives": [],
    "statements": [
        {
            "kind": 178,
            "declareKeyword": null,
            "decorators": null,
            "classKeyword": {
                "kind": 37822544,
                "flags": 80,
                "transformFlags": 0,
                "start": 0,
                "end": 5
            },
            "name": {
                "kind": 134299649,
                "text": "x",
                "rawText": "x",
                "flags": 96,
                "transformFlags": 0,
                "start": 5,
                "end": 7
            },
            "typeParameters": null,
            "tail": {
                "kind": 277,
                "classHeritage": null,
                "body": {
                    "kind": 303,
                    "elements": [
                        {
                            "kind": 280,
                            "decorators": null,
                            "declaredToken": null,
                            "staticKeyword": null,
                            "asyncKeyword": null,
                            "key": {
                                "kind": 134299649,
                                "text": "import",
                                "rawText": "import",
                                "flags": 96,
                                "transformFlags": 0,
                                "start": 9,
                                "end": 16
                            },
                            "optionalToken": null,
                            "type": null,
                            "initializer": null,
                            "flags": 32,
                            "transformFlags": 128,
                            "start": 9,
                            "end": 16
                        }
                    ],
                    "flags": 32,
                    "transformFlags": 0,
                    "start": 9,
                    "end": 16
                },
                "flags": 7,
                "transformFlags": 0,
                "start": 32,
                "end": 16
            },
            "flags": 16,
            "transformFlags": 0,
            "start": 0,
            "end": 16
        },
        {
            "kind": 124,
            "block": {
                "kind": 249,
                "statements": [
                    {
                        "kind": 120,
                        "expression": {
                            "kind": 134299649,
                            "text": "x",
                            "rawText": "x",
                            "flags": 96,
                            "transformFlags": 0,
                            "start": 18,
                            "end": 19
                        },
                        "flags": 16,
                        "transformFlags": 4096,
                        "start": 18,
                        "end": 19
                    }
                ],
                "flags": 16,
                "transformFlags": 0,
                "start": 18,
                "end": 19
            },
            "flags": 16,
            "transformFlags": 0,
            "start": 16,
            "end": 20
        },
        {
            "kind": 120,
            "expression": {
                "kind": 134299649,
                "text": "from",
                "rawText": "from",
                "flags": 96,
                "transformFlags": 0,
                "start": 20,
                "end": 25
            },
            "flags": 16,
            "transformFlags": 4096,
            "start": 20,
            "end": 25
        },
        {
            "kind": 120,
            "expression": {
                "kind": 201392131,
                "text": "y",
                "rawText": "\"y\"",
                "flags": 96,
                "transformFlags": 0,
                "start": 25,
                "end": 29
            },
            "flags": 16,
            "transformFlags": 4096,
            "start": 25,
            "end": 30
        }
    ],
    "isModule": true,
    "source": "class x { import {x} from \"y\"; }",
    "fileName": "__root__",
    "flags": 0,
    "transformFlags": 0,
    "start": 0,
    "end": 32
}
```

### Printed

```javascript

```

### Diagnostics

```javascript
✖ The parser expected to find a '}' to match the '{' token here - start: 17, end: 18
✖ Expected a `;` - start: 25, end: 29
✖ Declaration or statement expected - start: 30, end: 32

```

