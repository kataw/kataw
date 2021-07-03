# Kataw parser test case

## Options

`````js
{ jsx: true, disableWebCompat: true, allowTypes: true }
`````

## Input

`````js
({x, ...rest,});
`````

## Output

### CST

```javascript
{
    "kind": 122,
    "directives": [],
    "statements": [
        {
            "kind": 120,
            "expression": {
                "kind": 121,
                "expression": {
                    "kind": 220,
                    "propertyList": {
                        "kind": 218,
                        "properties": [
                            {
                                "kind": 134299649,
                                "text": "x",
                                "rawText": "x",
                                "flags": 96,
                                "start": 2,
                                "end": 3
                            },
                            {
                                "kind": 224,
                                "ellipsisToken": {
                                    "kind": 524302,
                                    "flags": 64,
                                    "start": 4,
                                    "end": 8
                                },
                                "argument": {
                                    "kind": 134299649,
                                    "text": "rest",
                                    "rawText": "rest",
                                    "flags": 96,
                                    "start": 8,
                                    "end": 12
                                },
                                "flags": 1073741856,
                                "start": 4,
                                "end": 12
                            }
                        ],
                        "trailingComma": true,
                        "flags": 16,
                        "start": 2,
                        "end": 13
                    },
                    "flags": 48,
                    "start": 1,
                    "end": 14
                },
                "flags": 0,
                "start": 34,
                "end": 15
            },
            "flags": 16,
            "start": 0,
            "end": 16
        }
    ],
    "isModule": false,
    "source": "({x, ...rest,});",
    "fileName": "__root__",
    "flags": 0,
    "start": 0,
    "end": 16
}
```

### Printed

```javascript

({ x, ...rest });

```

### Diagnostics

```javascript
✔ No errors
```

