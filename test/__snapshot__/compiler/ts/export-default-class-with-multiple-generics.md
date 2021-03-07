# Kataw parser test case

## Options

`````js
{ jsx: false, disableWebCompat: true, module: true }
`````

## Input

`````js
export default class<T, U> {

}
`````

## Output


### Hybrid CST


```javascript
{
    "kind": 149,
    "source": "export default class<T, U> {\n\n}",
    "filename": "",
    "moduleBody": {
        "kind": 150,
        "statements": [
            {
                "kind": 77,
                "declaration": {
                    "kind": 48,
                    "name": null,
                    "typeParameters": {
                        "kind": 8425,
                        "typeParameterList": [
                            {
                                "kind": 8424,
                                "name": {
                                    "kind": 196711,
                                    "text": "T",
                                    "rawText": "T",
                                    "flags": 65536,
                                    "intersects": false,
                                    "transformFlags": 0,
                                    "start": 21,
                                    "end": 22
                                },
                                "constraint": null,
                                "defaultType": null,
                                "expression": null,
                                "flags": 65536,
                                "intersects": false,
                                "transformFlags": 2097152,
                                "start": 21,
                                "end": 22
                            },
                            {
                                "kind": 8424,
                                "name": {
                                    "kind": 196711,
                                    "text": "U",
                                    "rawText": "U",
                                    "flags": 65536,
                                    "intersects": false,
                                    "transformFlags": 0,
                                    "start": 23,
                                    "end": 25
                                },
                                "constraint": null,
                                "defaultType": null,
                                "expression": null,
                                "flags": 65536,
                                "intersects": false,
                                "transformFlags": 2097152,
                                "start": 23,
                                "end": 25
                            }
                        ],
                        "flags": 65536,
                        "intersects": false,
                        "transformFlags": 2097152,
                        "start": 21,
                        "end": 25
                    },
                    "classHeritage": null,
                    "implementClauses": null,
                    "members": {
                        "kind": 50,
                        "elements": [],
                        "flags": 65536,
                        "intersects": false,
                        "transformFlags": 1,
                        "start": 28,
                        "end": 31
                    },
                    "decorators": null,
                    "flags": 65536,
                    "intersects": false,
                    "transformFlags": 1,
                    "start": 14,
                    "end": 31
                },
                "flags": 65536,
                "intersects": false,
                "transformFlags": 0,
                "start": 0,
                "end": 31
            }
        ],
        "transformFlags": 0,
        "flags": 65536,
        "intersects": false,
        "start": 0,
        "end": 31
    },
    "jsx": false,
    "printable": true,
    "diagnostics": [],
    "incremental": false,
    "flags": 0,
    "intersects": false,
    "transformFlags": 0,
    "start": 0,
    "end": 31
}
```

### Printed


```javascript
@{x2716}@ Soon to be open sourced
```

### Diagnostics


```javascript

```

