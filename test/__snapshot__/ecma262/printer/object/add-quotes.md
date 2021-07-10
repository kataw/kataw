# Kataw parser test case

### Printer Options

`````js
{ printWidth: 80, quoteProps: true }
`````

### Options

`````js
{ module: true, allowTypes: true }
`````

## Input

`````js

const x = {
  a: y,
  b: z
};

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
                "flags": 81,
                "transformFlags": 0,
                "start": 0,
                "end": 6
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
                            "start": 6,
                            "end": 8
                        },
                        "type": null,
                        "initializer": {
                            "kind": 220,
                            "propertyList": {
                                "kind": 218,
                                "properties": [
                                    {
                                        "kind": 219,
                                        "asteriskToken": null,
                                        "left": {
                                            "kind": 134299649,
                                            "text": "a",
                                            "rawText": "a",
                                            "flags": 97,
                                            "transformFlags": 0,
                                            "start": 12,
                                            "end": 16
                                        },
                                        "right": {
                                            "kind": 134299649,
                                            "text": "y",
                                            "rawText": "y",
                                            "flags": 96,
                                            "transformFlags": 0,
                                            "start": 17,
                                            "end": 19
                                        },
                                        "flags": 33,
                                        "transformFlags": 128,
                                        "start": 12,
                                        "end": 19
                                    },
                                    {
                                        "kind": 219,
                                        "asteriskToken": null,
                                        "left": {
                                            "kind": 134299649,
                                            "text": "b",
                                            "rawText": "b",
                                            "flags": 97,
                                            "transformFlags": 0,
                                            "start": 20,
                                            "end": 24
                                        },
                                        "right": {
                                            "kind": 134299649,
                                            "text": "z",
                                            "rawText": "z",
                                            "flags": 96,
                                            "transformFlags": 0,
                                            "start": 25,
                                            "end": 27
                                        },
                                        "flags": 33,
                                        "transformFlags": 128,
                                        "start": 20,
                                        "end": 27
                                    }
                                ],
                                "trailingComma": false,
                                "flags": 17,
                                "transformFlags": 0,
                                "start": 12,
                                "end": 27
                            },
                            "flags": 49,
                            "transformFlags": 8,
                            "start": 10,
                            "end": 29
                        },
                        "flags": 16,
                        "transformFlags": 4224,
                        "start": 6,
                        "end": 29
                    }
                ],
                "flags": 16777232,
                "transformFlags": 0,
                "start": 6,
                "end": 29
            },
            "flags": 33554448,
            "transformFlags": 0,
            "start": 0,
            "end": 30
        }
    ],
    "isModule": true,
    "source": "\nconst x = {\n  a: y,\n  b: z\n};\n",
    "fileName": "__root__",
    "flags": 0,
    "transformFlags": 0,
    "start": 0,
    "end": 31
}
```

### Printed

```javascript
const x = {
    "a": y,
    "b": z
  };
```

### Diagnostics

```javascript
✔ No errors
```

