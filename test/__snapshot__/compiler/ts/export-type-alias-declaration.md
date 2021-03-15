# Kataw parser test case

## Options

`````js
{ jsx: false, disableWebCompat: true, module: true }
`````

## Input

`````js
export type TestAlias = string | number;
`````

## Output

### Hybrid CST

```javascript
{
    "kind": 2243,
    "source": "export type TestAlias = string | number;",
    "filename": "",
    "statements": [
        {
            "kind": 8417,
            "name": {
                "kind": 196712,
                "text": "TestAlias",
                "rawText": "TestAlias",
                "flags": 0,
                "symbol": null,
                "transformFlags": 0,
                "start": 11,
                "end": 21
            },
            "type": {
                "kind": 8432,
                "types": [
                    {
                        "kind": 4202702,
                        "flags": 0,
                        "symbol": null,
                        "transformFlags": 2097152,
                        "start": 23,
                        "end": 30
                    },
                    {
                        "kind": 4202657,
                        "flags": 0,
                        "symbol": null,
                        "transformFlags": 2097152,
                        "start": 32,
                        "end": 39
                    }
                ],
                "flags": 0,
                "symbol": null,
                "transformFlags": 2097152,
                "start": 30,
                "end": 39
            },
            "typeParameters": null,
            "flags": 64,
            "symbol": null,
            "transformFlags": 2097152,
            "start": 6,
            "end": 40
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
    "end": 40
}
```

### Printed

```javascript
@{x2716}@ Soon to be open sourced
```

### Diagnostics

```javascript

```

