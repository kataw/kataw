# Kataw parser test case

## Input

`````js

class A<__P> {}
`````

## Output


### Hybrid CST


```javascript
{
    "kind": 196,
    "source": "\nclass A<__P> {}",
    "filename": "",
    "scriptBody": {
        "kind": 197,
        "statements": [
            {
                "kind": 48,
                "name": {
                    "kind": 131102,
                    "text": "A",
                    "rawText": "A",
                    "flags": 0,
                    "intersects": false,
                    "transformFlags": 1025,
                    "start": 6,
                    "end": 8
                },
                "typeParameters": {
                    "kind": 8425,
                    "typeParameterList": [
                        {
                            "kind": 8424,
                            "name": {
                                "kind": 196711,
                                "text": "__P",
                                "rawText": "__P",
                                "flags": 0,
                                "intersects": false,
                                "transformFlags": 0,
                                "start": 9,
                                "end": 12
                            },
                            "constraint": null,
                            "defaultType": null,
                            "expression": null,
                            "flags": 0,
                            "intersects": false,
                            "transformFlags": 2097152,
                            "start": 9,
                            "end": 12
                        }
                    ],
                    "flags": 0,
                    "intersects": false,
                    "transformFlags": 2097152,
                    "start": 9,
                    "end": 12
                },
                "classHeritage": null,
                "implementClauses": null,
                "members": {
                    "kind": 50,
                    "elements": [],
                    "flags": 0,
                    "intersects": false,
                    "transformFlags": 1,
                    "start": 15,
                    "end": 16
                },
                "decorators": null,
                "flags": 16384,
                "intersects": false,
                "transformFlags": 1,
                "start": 0,
                "end": 16
            }
        ],
        "transformFlags": 0,
        "flags": 0,
        "intersects": false,
        "start": 0,
        "end": 16
    },
    "jsx": false,
    "printable": true,
    "diagnostics": [],
    "incremental": false,
    "flags": 0,
    "intersects": false,
    "transformFlags": 0,
    "start": 0,
    "end": 16
}
```

### Printed


```javascript
@{x2716}@ Soon to be open sourced
```

### Diagnostics


```javascript

```

