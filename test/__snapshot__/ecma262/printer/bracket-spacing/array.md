# Kataw parser test case

## Input

`````js
const arr1 = [1,2,3,4];
const arr2 = [1, 2, 3, 4];

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
                "kind": 37757004,
                "flags": 80,
                "transformFlags": 0,
                "start": 0,
                "end": 5
            },
            "binding": {
                "kind": 151,
                "bindingList": [
                    {
                        "kind": 190,
                        "binding": {
                            "kind": 134299649,
                            "text": "arr1",
                            "rawText": "arr1",
                            "flags": 96,
                            "transformFlags": 0,
                            "start": 5,
                            "end": 10
                        },
                        "type": null,
                        "initializer": {
                            "kind": 119,
                            "elementList": {
                                "kind": 270,
                                "elements": [
                                    {
                                        "kind": 201392130,
                                        "text": 1,
                                        "rawText": "1",
                                        "flags": 96,
                                        "transformFlags": 0,
                                        "start": 14,
                                        "end": 15
                                    },
                                    {
                                        "kind": 201392130,
                                        "text": 2,
                                        "rawText": "2",
                                        "flags": 96,
                                        "transformFlags": 0,
                                        "start": 16,
                                        "end": 17
                                    },
                                    {
                                        "kind": 201392130,
                                        "text": 3,
                                        "rawText": "3",
                                        "flags": 96,
                                        "transformFlags": 0,
                                        "start": 18,
                                        "end": 19
                                    },
                                    {
                                        "kind": 201392130,
                                        "text": 4,
                                        "rawText": "4",
                                        "flags": 96,
                                        "transformFlags": 0,
                                        "start": 20,
                                        "end": 21
                                    }
                                ],
                                "trailingComma": false,
                                "flags": 32,
                                "transformFlags": 0,
                                "start": 14,
                                "end": 21
                            },
                            "flags": 32,
                            "transformFlags": 8,
                            "start": 12,
                            "end": 22
                        },
                        "flags": 16,
                        "transformFlags": 128,
                        "start": 5,
                        "end": 22
                    }
                ],
                "flags": 16777232,
                "transformFlags": 0,
                "start": 5,
                "end": 22
            },
            "flags": 33554448,
            "transformFlags": 0,
            "start": 0,
            "end": 23
        },
        {
            "kind": 162,
            "lexicalKeyword": {
                "kind": 37757004,
                "flags": 81,
                "transformFlags": 0,
                "start": 23,
                "end": 29
            },
            "binding": {
                "kind": 151,
                "bindingList": [
                    {
                        "kind": 190,
                        "binding": {
                            "kind": 134299649,
                            "text": "arr2",
                            "rawText": "arr2",
                            "flags": 96,
                            "transformFlags": 0,
                            "start": 29,
                            "end": 34
                        },
                        "type": null,
                        "initializer": {
                            "kind": 119,
                            "elementList": {
                                "kind": 270,
                                "elements": [
                                    {
                                        "kind": 201392130,
                                        "text": 1,
                                        "rawText": "1",
                                        "flags": 96,
                                        "transformFlags": 0,
                                        "start": 38,
                                        "end": 39
                                    },
                                    {
                                        "kind": 201392130,
                                        "text": 2,
                                        "rawText": "2",
                                        "flags": 96,
                                        "transformFlags": 0,
                                        "start": 40,
                                        "end": 42
                                    },
                                    {
                                        "kind": 201392130,
                                        "text": 3,
                                        "rawText": "3",
                                        "flags": 96,
                                        "transformFlags": 0,
                                        "start": 43,
                                        "end": 45
                                    },
                                    {
                                        "kind": 201392130,
                                        "text": 4,
                                        "rawText": "4",
                                        "flags": 96,
                                        "transformFlags": 0,
                                        "start": 46,
                                        "end": 48
                                    }
                                ],
                                "trailingComma": false,
                                "flags": 32,
                                "transformFlags": 0,
                                "start": 38,
                                "end": 48
                            },
                            "flags": 32,
                            "transformFlags": 8,
                            "start": 36,
                            "end": 49
                        },
                        "flags": 16,
                        "transformFlags": 128,
                        "start": 29,
                        "end": 49
                    }
                ],
                "flags": 16777232,
                "transformFlags": 0,
                "start": 29,
                "end": 49
            },
            "flags": 33554448,
            "transformFlags": 0,
            "start": 23,
            "end": 50
        }
    ],
    "isModule": false,
    "source": "const arr1 = [1,2,3,4];\nconst arr2 = [1, 2, 3, 4];\n",
    "fileName": "__root__",
    "flags": 0,
    "transformFlags": 0,
    "start": 0,
    "end": 51
}
```

### Printed

```javascript

const arr1 = [1, 2, 3, 4];
const arr2 = [1, 2, 3, 4];

```

### Diagnostics

```javascript
✔ No errors
```

