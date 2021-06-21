# Kataw parser test case

## Input

`````js
async
(2);
`````

## Output

### CST

```javascript
{
    "kind": 122,
    "directives": [],
    "statements": [
        {
            "kind": 131,
            "expression": {
                "kind": 134299649,
                "text": "async",
                "rawText": "async",
                "flags": 96,
                "start": 0,
                "end": 5
            },
            "argumentList": {
                "kind": 256,
                "elements": [
                    {
                        "kind": 201392130,
                        "text": 2,
                        "rawText": "2",
                        "flags": 96,
                        "start": 7,
                        "end": 8
                    }
                ],
                "trailingComma": false,
                "flags": 32,
                "start": 0,
                "end": 8
            },
            "flags": 268435489,
            "start": 0,
            "end": 9
        },
        {
            "kind": 168,
            "flags": 16,
            "start": 9,
            "end": 10
        }
    ],
    "isModule": false,
    "source": "async\n(2);",
    "fileName": "__root__",
    "flags": 0,
    "start": 0,
    "end": 10
}
```

### Printed

```javascript

 , ; 
```

### Diagnostics

```javascript
✔ No errors
```

