# Kataw parser test case

> Auto-generated tests to validate error recovery
>

### Cases

> `````js
> ;
> `````

> `````js
> ;;
> `````

> `````js
> ; m() {}
> `````

> `````js
> set x(v) {}
> `````

> `````js
> *g() {}
> `````

> `````js
> *g() {};
> `````

> `````js
> ; *g() {}
> `````

> `````js
> static() {}
> `````

> `````js
> get static() {}
> `````

> `````js
> set static(v) {}
> `````

> `````js
> static get x() {}
> `````

> `````js
> static get() {}
> `````

> `````js
> static set() {}
> `````

> `````js
> static static() {}
> `````

> `````js
> *set() {}
> `````

> `````js
> static *static() {}
> `````

> `````js
> static *g() {}
> `````

> `````js
> *async(){}
> `````

> `````js
> static async(){}
> `````

> `````js
> static *async(){}
> `````

// Escaped 'static' should be allowed anywhere
// static-as-PropertyName is.

> `````js
> st\\u0061tic() {}
> `````

> `````js
> get st\\u0061tic() {}
> `````

> `````js
> get st\\u0061tic() {}
> `````

> `````js
> static st\\u0061tic() {}
> `````

> `````js
> *st\\u0061tic() {}
> `````

> `````js
> async x(){}
> `````

> `````js
> async async(){}
> `````

> `````js
> async(){}
> `````

> `````js
> *async(){}
> `````

### Templates

#### class-expr

`````js
(class { # });
`````

#### class-expr-extends

`````js
(class extends Base {#});
`````

#### class-decl-extends

`````js
class C extends Base { # }
`````

## Output


### Hybrid CST


```javascript
{
    "kind": 196,
    "source": "(class { # });",
    "filename": "",
    "scriptBody": {
        "kind": 197,
        "statements": [
            {
                "kind": 2097233,
                "expression": {
                    "kind": 66224,
                    "expression": {
                        "kind": 82483,
                        "name": null,
                        "typeParameters": null,
                        "classHeritage": null,
                        "implementClauses": null,
                        "members": {
                            "kind": 50,
                            "elements": [
                                {
                                    "kind": 84,
                                    "key": {
                                        "kind": 196711,
                                        "text": "#",
                                        "rawText": "class",
                                        "flags": 0,
                                        "intersects": false,
                                        "transformFlags": 0,
                                        "start": 8,
                                        "end": 10
                                    },
                                    "isAbstract": false,
                                    "isReadOnly": false,
                                    "isOptional": false,
                                    "exclamation": false,
                                    "type": null,
                                    "initializer": null,
                                    "decorators": null,
                                    "accessModifier": null,
                                    "isStatic": false,
                                    "flags": 0,
                                    "intersects": false,
                                    "transformFlags": 524352,
                                    "start": 8,
                                    "end": 10
                                }
                            ],
                            "flags": 0,
                            "intersects": false,
                            "transformFlags": 1,
                            "start": 8,
                            "end": 12
                        },
                        "decorators": null,
                        "flags": 0,
                        "intersects": false,
                        "transformFlags": 1,
                        "start": 1,
                        "end": 12
                    },
                    "flags": 0,
                    "intersects": false,
                    "transformFlags": 0,
                    "start": 0,
                    "end": 13
                },
                "flags": 0,
                "intersects": false,
                "transformFlags": 0,
                "start": 0,
                "end": 14
            }
        ],
        "transformFlags": 0,
        "flags": 0,
        "intersects": false,
        "start": 0,
        "end": 14
    },
    "jsx": false,
    "printable": true,
    "diagnostics": [
        {
            "kind": 2,
            "source": 0,
            "message": "Invalid character",
            "start": 10,
            "length": 1
        }
    ],
    "incremental": false,
    "flags": 0,
    "intersects": false,
    "transformFlags": 0,
    "start": 0,
    "end": 14
}
```

### Printed


```javascript
@{x2716}@ Soon to be open sourced
```

### Diagnostics


```javascript

```

