# Kataw parser test case

## Options

`````js
{ jsx: true, disableWebCompat: true, module: true }
`````

## Input

`````js
export default class {} foo
`````

## Output


### Hybrid CST


```javascript
{
    "kind": 149,
    "source": "export default class {} foo",
    "filename": "",
    "moduleBody": {
        "kind": 150,
        "statements": [
            {
                "kind": 77,
                "declaration": {
                    "kind": 48,
                    "name": null,
                    "typeParameters": null,
                    "classHeritage": null,
                    "implementClauses": null,
                    "members": {
                        "kind": 50,
                        "elements": [],
                        "flags": 65536,
                        "intersects": false,
                        "transformFlags": 1,
                        "start": 22,
                        "end": 23
                    },
                    "decorators": null,
                    "isAbstract": false,
                    "flags": 65536,
                    "intersects": false,
                    "transformFlags": 1,
                    "start": 14,
                    "end": 23
                },
                "flags": 65536,
                "intersects": false,
                "transformFlags": 0,
                "start": 0,
                "end": 23
            },
            {
                "kind": 2097233,
                "expression": {
                    "kind": 196712,
                    "text": "foo",
                    "rawText": "foo",
                    "flags": 65536,
                    "intersects": false,
                    "transformFlags": 0,
                    "start": 23,
                    "end": 27
                },
                "flags": 0,
                "intersects": false,
                "transformFlags": 0,
                "start": 23,
                "end": 27
            }
        ],
        "transformFlags": 0,
        "flags": 65536,
        "intersects": false,
        "start": 0,
        "end": 27
    },
    "jsx": true,
    "printable": true,
    "diagnostics": [],
    "incremental": false,
    "flags": 0,
    "intersects": false,
    "transformFlags": 0,
    "start": 0,
    "end": 27
}
```

### Printed


```javascript
@{x2716}@ Soon to be open sourced
```

### Diagnostics


```javascript

```

