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
    "kind": 122,
    "directives": [],
    "statements": [
        {
            "kind": 120,
            "expression": {
                "kind": 121,
                "expression": {
                    "kind": 189,
                    "decorators": null,
                    "classKeyword": {
                        "kind": 37822544,
                        "flags": 0,
                        "start": 1,
                        "end": 6
                    },
                    "name": null,
                    "typeParameters": null,
                    "classHeritage": null,
                    "members": {
                        "kind": 277,
                        "elements": [
                            {
                                "kind": 280,
                                "decorators": null,
                                "declaredToken": null,
                                "staticToken": null,
                                "asyncKeyword": null,
                                "key": {
                                    "kind": 67174651,
                                    "text": "#",
                                    "flags": 96,
                                    "start": 8,
                                    "end": 10
                                },
                                "optionalToken": null,
                                "type": null,
                                "initializer": null,
                                "flags": 32,
                                "start": 8,
                                "end": 10
                            }
                        ],
                        "flags": 32,
                        "start": 8,
                        "end": 12
                    },
                    "flags": 32,
                    "start": 1,
                    "end": 12
                },
                "flags": 32,
                "start": 0,
                "end": 13
            },
            "flags": 16,
            "start": 0,
            "end": 14
        }
    ],
    "isModule": false,
    "source": "(class { # });",
    "fileName": "__root__",
    "flags": 0,
    "start": 0,
    "end": 14
}
```

### Printed

```javascript
✖ Soon to be open sourced
```

### Diagnostics

```javascript
✖ Invalid character - start: 8, end: 10

```

