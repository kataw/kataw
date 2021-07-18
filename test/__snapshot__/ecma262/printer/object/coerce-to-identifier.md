# Kataw parser test case

### Printer Options

`````js
{ printWidth: 80, coerceQuoteProps: true, insertPragma: true }
`````

### Options

`````js
{ module: true, allowTypes: true }
`````

## Input

`````js

const x = {
  "key": foo
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
                                            "kind": 201392131,
                                            "text": "key",
                                            "rawText": "\"key\"",
                                            "flags": 97,
                                            "transformFlags": 0,
                                            "start": 12,
                                            "end": 20
                                        },
                                        "right": {
                                            "kind": 134299649,
                                            "text": "foo",
                                            "rawText": "foo",
                                            "flags": 96,
                                            "transformFlags": 0,
                                            "start": 21,
                                            "end": 25
                                        },
                                        "flags": 33,
                                        "transformFlags": 128,
                                        "start": 12,
                                        "end": 25
                                    }
                                ],
                                "trailingComma": false,
                                "flags": 17,
                                "transformFlags": 0,
                                "start": 12,
                                "end": 25
                            },
                            "flags": 49,
                            "transformFlags": 8,
                            "start": 10,
                            "end": 27
                        },
                        "flags": 16,
                        "transformFlags": 4224,
                        "start": 6,
                        "end": 27
                    }
                ],
                "flags": 16777232,
                "transformFlags": 0,
                "start": 6,
                "end": 27
            },
            "flags": 33554448,
            "transformFlags": 0,
            "start": 0,
            "end": 28
        }
    ],
    "isModule": true,
    "source": "\nconst x = {\n  \"key\": foo\n};",
    "fileName": "__root__",
    "flags": 0,
    "transformFlags": 0,
    "start": 0,
    "end": 28
}
```

### Printed

```javascript
/**
 * @kataw
 */

const x = {
    key: foo
  };
```

### Diagnostics

```javascript
✔ No errors
```

