# Kataw parser test case

## Options

`````js
{ jsx: true, disableWebCompat: true, module: true }
`````

## Input

`````js
export {x,} from "foo"
`````

## Output


### Hybrid CST


```javascript
{
    "kind": 149,
    "source": "export {x,} from \"foo\"",
    "filename": "",
    "moduleBody": {
        "kind": 150,
        "statements": [
            {
                "kind": 76,
                "declaration": null,
                "namedExports": {
                    "kind": 152,
                    "exportsList": {
                        "kind": 80,
                        "specifiers": [
                            {
                                "kind": 79,
                                "moduleExportName": null,
                                "name": {
                                    "kind": 196711,
                                    "text": "x",
                                    "rawText": "x",
                                    "flags": 65536,
                                    "intersects": false,
                                    "transformFlags": 0,
                                    "start": 8,
                                    "end": 9
                                },
                                "binding": null,
                                "flags": 65536,
                                "intersects": false,
                                "transformFlags": 0,
                                "start": 8,
                                "end": 9
                            }
                        ],
                        "flags": 65536,
                        "intersects": false,
                        "transformFlags": 0,
                        "start": 8,
                        "end": 10
                    },
                    "flags": 65536,
                    "intersects": false,
                    "transformFlags": 0,
                    "start": 6,
                    "end": 11
                },
                "exportFromClause": null,
                "fromClause": {
                    "kind": 4261583,
                    "text": "foo",
                    "rawText": "foo",
                    "flags": 65536,
                    "intersects": false,
                    "transformFlags": 0,
                    "start": 16,
                    "end": 22
                },
                "isTypeOnly": false,
                "flags": 65536,
                "intersects": false,
                "transformFlags": 0,
                "start": 0,
                "end": 22
            }
        ],
        "transformFlags": 0,
        "flags": 65536,
        "intersects": false,
        "start": 0,
        "end": 22
    },
    "jsx": true,
    "printable": true,
    "diagnostics": [],
    "incremental": false,
    "flags": 0,
    "intersects": false,
    "transformFlags": 0,
    "start": 0,
    "end": 22
}
```

### Printed


```javascript
@{x2716}@ Soon to be open sourced
```

### Diagnostics


```javascript

```

