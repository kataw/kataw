# Kataw parser test case

## Input

`````js
let[{}=class{}]=null
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
                            "kind": 201,
                            "elementList": {
                                "kind": 324,
                                "elements": [
                                    {
                                        "kind": 281,
                                        "ellipsisToken": null,
                                        "left": {
                                            "kind": 212,
                                            "propertyList": {
                                                "kind": 213,
                                                "properties": [],
                                                "trailingComma": false,
                                                "flags": 32,
                                                "transformFlags": 0,
                                                "start": 5,
                                                "end": 5
                                            },
                                            "flags": 32,
                                            "transformFlags": 0,
                                            "start": 4,
                                            "end": 6
                                        },
                                        "optionalToken": null,
                                        "type": null,
                                        "right": {
                                            "kind": 189,
                                            "decorators": null,
                                            "classKeyword": {
                                                "kind": 37822544,
                                                "flags": 64,
                                                "transformFlags": 0,
                                                "start": 7,
                                                "end": 12
                                            },
                                            "name": null,
                                            "typeParameters": null,
                                            "tail": {
                                                "kind": 277,
                                                "classHeritage": null,
                                                "body": {
                                                    "kind": 303,
                                                    "elements": [],
                                                    "flags": 32,
                                                    "transformFlags": 0,
                                                    "start": 13,
                                                    "end": 13
                                                },
                                                "flags": 12,
                                                "transformFlags": 0,
                                                "start": 32,
                                                "end": 14
                                            },
                                            "flags": 32,
                                            "transformFlags": 0,
                                            "start": 7,
                                            "end": 14
                                        },
                                        "flags": 32,
                                        "transformFlags": 4096,
                                        "start": 4,
                                        "end": 14
                                    }
                                ],
                                "trailingComma": false,
                                "flags": 0,
                                "transformFlags": 0,
                                "start": 4,
                                "end": 14
                            },
                            "flags": 32,
                            "transformFlags": 0,
                            "start": 3,
                            "end": 15
                        },
                        "type": null,
                        "initializer": {
                            "kind": 138477575,
                            "flags": 96,
                            "transformFlags": 0,
                            "start": 16,
                            "end": 20
                        },
                        "flags": 16,
                        "transformFlags": 4224,
                        "start": 3,
                        "end": 20
                    }
                ],
                "flags": 16,
                "transformFlags": 0,
                "start": 3,
                "end": 20
            },
            "flags": 33554448,
            "transformFlags": 0,
            "start": 0,
            "end": 20
        }
    ],
    "isModule": false,
    "source": "let[{}=class{}]=null",
    "fileName": "__root__",
    "flags": 0,
    "transformFlags": 0,
    "start": 0,
    "end": 20
}
```

### Printed

```javascript
let [{} = class {}] = null;
```

### Diagnostics

```javascript
✔ No errors
```

