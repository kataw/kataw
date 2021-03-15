# Kataw parser test case

## Input

`````js
do;while(j)try{}finally{}
`````

## Output

### Hybrid CST

```javascript
{
    "kind": 2243,
    "source": "do;while(j)try{}finally{}",
    "filename": "",
    "statements": [
        {
            "kind": 2097218,
            "expression": {
                "kind": 196712,
                "text": "j",
                "rawText": "j",
                "flags": 0,
                "symbol": null,
                "transformFlags": 0,
                "start": 9,
                "end": 10
            },
            "statement": {
                "kind": 6291526,
                "flags": 0,
                "symbol": null,
                "transformFlags": 0,
                "start": 2,
                "end": 3
            },
            "flags": 0,
            "symbol": null,
            "transformFlags": 0,
            "start": 0,
            "end": 11
        },
        {
            "kind": 2097375,
            "block": {
                "kind": 2099237,
                "block": {
                    "kind": 2084,
                    "statements": [],
                    "multiline": false,
                    "flags": 0,
                    "symbol": null,
                    "transformFlags": 0,
                    "start": 15,
                    "end": 15
                },
                "flags": 0,
                "symbol": null,
                "transformFlags": 0,
                "start": 14,
                "end": 16
            },
            "catchClause": null,
            "finallyBlock": {
                "kind": 2099237,
                "block": {
                    "kind": 2084,
                    "statements": [],
                    "multiline": false,
                    "flags": 0,
                    "symbol": null,
                    "transformFlags": 0,
                    "start": 24,
                    "end": 24
                },
                "flags": 0,
                "symbol": null,
                "transformFlags": 0,
                "start": 23,
                "end": 25
            },
            "flags": 0,
            "symbol": null,
            "transformFlags": 0,
            "start": 11,
            "end": 25
        }
    ],
    "isModule": false,
    "printable": true,
    "diagnostics": [],
    "original": null,
    "symbol": null,
    "flags": 0,
    "transformFlags": 0,
    "start": 0,
    "end": 25
}
```

### Printed

```javascript
@{x2716}@ Soon to be open sourced
```

### Diagnostics

```javascript

```

