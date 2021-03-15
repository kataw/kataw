# Kataw parser test case

## Input

`````js
while (0) let
foo
`````

## Output

### Hybrid CST


```javascript
{
    "kind": 196,
    "source": "while (0) let\nfoo",
    "filename": "",
    "statements": [
        {
            "kind": 2097399,
            "expression": {
                "kind": 4261540,
                "text": 0,
                "rawText": "0",
                "flags": 0,
                "intersects": false,
                "transformFlags": 0,
                "start": 7,
                "end": 8
            },
            "statement": {
                "kind": 2097233,
                "expression": {
                    "kind": 196712,
                    "text": "let",
                    "rawText": "let",
                    "flags": 0,
                    "intersects": false,
                    "transformFlags": 0,
                    "start": 9,
                    "end": 13
                },
                "flags": 0,
                "intersects": false,
                "transformFlags": 0,
                "start": 9,
                "end": 13
            },
            "flags": 32768,
            "intersects": false,
            "transformFlags": 0,
            "start": 0,
            "end": 13
        },
        {
            "kind": 2097233,
            "expression": {
                "kind": 196712,
                "text": "foo",
                "rawText": "foo",
                "flags": 32768,
                "intersects": false,
                "transformFlags": 0,
                "start": 13,
                "end": 17
            },
            "flags": 0,
            "intersects": false,
            "transformFlags": 0,
            "start": 13,
            "end": 17
        }
    ],
    "isModule": false,
    "printable": true,
    "diagnostics": [],
    "intersects": false,
    "original": null,
    "symbol": null,
    "flags": 0,
    "transformFlags": 0,
    "start": 0,
    "end": 17
}
```

  
### Printed


```javascript
@{x2716}@ Soon to be open sourced
```

  
### Diagnostics


```javascript

```

