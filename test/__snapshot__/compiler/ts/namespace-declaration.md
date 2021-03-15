# Kataw parser test case

## Input

`````js
namespace x {
  export abstract class x {}
}

`````

## Output

### Hybrid CST


```javascript
{
    "kind": 196,
    "source": "namespace x {\n  export abstract class x {}\n}\n",
    "filename": "",
    "statements": [
        {
            "kind": 2105597,
            "name": {
                "kind": 196712,
                "text": "x",
                "rawText": "x",
                "flags": 0,
                "intersects": false,
                "transformFlags": 0,
                "start": 9,
                "end": 11
            },
            "body": {
                "kind": 2105596,
                "statements": [
                    {
                        "kind": 48,
                        "name": {
                            "kind": 131102,
                            "text": "x",
                            "rawText": "x",
                            "flags": 0,
                            "intersects": false,
                            "transformFlags": 1025,
                            "start": 37,
                            "end": 39
                        },
                        "typeParameters": null,
                        "classHeritage": null,
                        "implementClauses": null,
                        "members": {
                            "kind": 50,
                            "elements": [],
                            "flags": 32768,
                            "intersects": false,
                            "transformFlags": 1,
                            "start": 41,
                            "end": 42
                        },
                        "decorators": null,
                        "isAbstract": true,
                        "flags": 536903744,
                        "intersects": false,
                        "transformFlags": 2097153,
                        "start": 31,
                        "end": 42
                    }
                ],
                "multiline": true,
                "flags": 32768,
                "intersects": false,
                "transformFlags": 2097152,
                "start": 13,
                "end": 42
            },
            "flags": 32768,
            "intersects": false,
            "transformFlags": 2097152,
            "start": 0,
            "end": 44
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
    "end": 45
}
```

  
### Printed


```javascript
@{x2716}@ Soon to be open sourced
```

  
### Diagnostics


```javascript

```

