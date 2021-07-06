# Kataw parser test case

## Input

`````js
let x /*1*/ :/*2*/ string /*3*/|/*4*/ number;
`````

## Options

### Parser Options

`````js
{ allowTypes : true }
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
                        "type": {
                            "kind": 139,
                            "bitwiseOrToken": null,
                            "bitwiseAndToken": null,
                            "type": {
                                "kind": 137,
                                "types": [
                                    {
                                        "kind": 134234347,
                                        "flags": 2097216,
                                        "transformFlags": 0,
                                        "start": 13,
                                        "end": 25
                                    },
                                    {
                                        "kind": 134234345,
                                        "flags": 2097216,
                                        "transformFlags": 0,
                                        "start": 32,
                                        "end": 44
                                    }
                                ],
                                "flags": 2097152,
                                "transformFlags": 0,
                                "start": 25,
                                "end": 44
                            },
                            "flags": 2097152,
                            "transformFlags": 0,
                            "start": 13,
                            "end": 44
                        },
                        "initializer": null,
                        "flags": 16,
                        "transformFlags": 128,
                        "start": 3,
                        "end": 44
                    }
                ],
                "flags": 16,
                "transformFlags": 0,
                "start": 3,
                "end": 44
            },
            "flags": 33554448,
            "transformFlags": 0,
            "start": 0,
            "end": 45
        }
    ],
    "isModule": false,
    "source": "let x /*1*/ :/*2*/ string /*3*/|/*4*/ number;",
    "fileName": "__root__",
    "flags": 0,
    "transformFlags": 0,
    "start": 0,
    "end": 45
}
```

### Printed

```javascript
let x: string | number;
```

### Diagnostics

```javascript
✔ No errors
```

