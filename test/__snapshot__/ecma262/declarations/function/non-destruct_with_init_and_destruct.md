# Kataw parser test case

## Input

`````js
let foo = arr, [bar] = arr2;
`````

## Options

### Parser Options

`````js
{}
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
                            "text": "foo",
                            "rawText": "foo",
                            "flags": 96,
                            "transformFlags": 0,
                            "start": 3,
                            "end": 7
                        },
                        "type": null,
                        "initializer": {
                            "kind": 134299649,
                            "text": "arr",
                            "rawText": "arr",
                            "flags": 96,
                            "transformFlags": 0,
                            "start": 9,
                            "end": 13
                        },
                        "flags": 16,
                        "transformFlags": 4224,
                        "start": 3,
                        "end": 13
                    },
                    {
                        "kind": 190,
                        "binding": {
                            "kind": 201,
                            "elementList": {
                                "kind": 324,
                                "elements": [
                                    {
                                        "kind": 134299649,
                                        "text": "bar",
                                        "rawText": "bar",
                                        "flags": 96,
                                        "transformFlags": 0,
                                        "start": 16,
                                        "end": 19
                                    }
                                ],
                                "trailingComma": false,
                                "flags": 0,
                                "transformFlags": 0,
                                "start": 16,
                                "end": 19
                            },
                            "flags": 32,
                            "transformFlags": 0,
                            "start": 14,
                            "end": 20
                        },
                        "type": null,
                        "initializer": {
                            "kind": 134299649,
                            "text": "arr2",
                            "rawText": "arr2",
                            "flags": 96,
                            "transformFlags": 0,
                            "start": 22,
                            "end": 27
                        },
                        "flags": 16,
                        "transformFlags": 4224,
                        "start": 14,
                        "end": 27
                    }
                ],
                "flags": 16,
                "transformFlags": 0,
                "start": 3,
                "end": 27
            },
            "flags": 33554448,
            "transformFlags": 0,
            "start": 0,
            "end": 28
        }
    ],
    "isModule": false,
    "source": "let foo = arr, [bar] = arr2;",
    "fileName": "__root__",
    "flags": 0,
    "transformFlags": 0,
    "start": 0,
    "end": 28
}
```

### Printed

```javascript
let foo = arr, [bar] = arr2;
```

### Diagnostics

```javascript
✔ No errors
```

