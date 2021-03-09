# Kataw parser test case

## Options

`````js
{ jsx: true, disableWebCompat: true, module: true }
`````

## Input

`````js
export default class x {}
`````

## Output


### Hybrid CST


```javascript
{
    "kind": 149,
    "source": "export default class x {}",
    "filename": "",
    "moduleBody": {
        "kind": 150,
        "statements": [
            {
                "kind": 77,
                "declaration": {
                    "kind": 48,
                    "name": {
                        "kind": 131102,
                        "text": "x",
                        "rawText": "x",
                        "flags": 65536,
                        "intersects": false,
                        "transformFlags": 1025,
                        "start": 20,
                        "end": 22
                    },
                    "typeParameters": null,
                    "classHeritage": null,
                    "implementClauses": null,
                    "members": {
                        "kind": 50,
                        "elements": [],
                        "flags": 65536,
                        "intersects": false,
                        "transformFlags": 1,
                        "start": 24,
                        "end": 25
                    },
                    "decorators": null,
                    "isAbstract": false,
                    "flags": 65536,
                    "intersects": false,
                    "transformFlags": 1,
                    "start": 14,
                    "end": 25
                },
                "flags": 65536,
                "intersects": false,
                "transformFlags": 0,
                "start": 0,
                "end": 25
            }
        ],
        "transformFlags": 0,
        "flags": 65536,
        "intersects": false,
        "start": 0,
        "end": 25
    },
    "jsx": true,
    "printable": true,
    "diagnostics": [],
    "incremental": false,
    "flags": 0,
    "intersects": false,
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

