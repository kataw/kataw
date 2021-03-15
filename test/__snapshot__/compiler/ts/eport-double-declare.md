# Kataw parser test case

## Options

`````js
{ jsx: false, disableWebCompat: true, module: true }
`````

## Input

`````js
export declare declare var name;
`````

## Output

### Hybrid CST


```javascript
{
    "kind": 196,
    "source": "export declare declare var name;",
    "filename": "",
    "statements": [
        {
            "kind": 2097233,
            "expression": {
                "kind": 196712,
                "text": "declare",
                "rawText": "declare",
                "flags": 0,
                "intersects": false,
                "transformFlags": 0,
                "start": 6,
                "end": 14
            },
            "flags": 64,
            "intersects": false,
            "transformFlags": 0,
            "start": 6,
            "end": 14
        },
        {
            "kind": 2097397,
            "declarationList": {
                "kind": 244,
                "declarations": [
                    {
                        "kind": 16627,
                        "binding": {
                            "kind": 131102,
                            "text": "name",
                            "rawText": "name",
                            "flags": 0,
                            "intersects": false,
                            "transformFlags": 1025,
                            "start": 26,
                            "end": 31
                        },
                        "exclamation": false,
                        "type": null,
                        "initializer": null,
                        "flags": 26,
                        "intersects": false,
                        "transformFlags": 0,
                        "start": 0,
                        "end": 31
                    }
                ],
                "flags": 0,
                "intersects": false,
                "transformFlags": 0,
                "start": 26,
                "end": 31
            },
            "flags": 402653184,
            "intersects": false,
            "transformFlags": 0,
            "start": 22,
            "end": 32
        }
    ],
    "isModule": false,
    "printable": true,
    "diagnostics": [
        {
            "kind": 2,
            "source": 2,
            "message": "';' expected.",
            "start": 15,
            "length": 0
        }
    ],
    "intersects": false,
    "original": null,
    "symbol": null,
    "flags": 0,
    "transformFlags": 0,
    "start": 0,
    "end": 32
}
```

  
### Printed


```javascript
@{x2716}@ Soon to be open sourced
```

  
### Diagnostics


```javascript

```

